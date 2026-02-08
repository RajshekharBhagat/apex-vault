import { registerSchema } from "@/schema/auth.schema";
import { registerUser } from "@/services/auth.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsed = registerSchema.safeParse(body);
        if(!parsed.success) {
            return NextResponse.json({
                success: false,
                message: "Validation error",
                errors: parsed.error.flatten().fieldErrors
            }, { status: 400 });
        }
        const result = await registerUser(parsed.data);
        if(!result.success) {
            return NextResponse.json(result, {status: 409});
        }
        return NextResponse.json(result, {status: 201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 });
    }
}