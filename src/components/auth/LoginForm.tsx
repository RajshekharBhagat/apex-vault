"use client";
import { LoginInput, loginSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useState } from "react";
import {useForm } from "react-hook-form";
import { Card, CardDescription, CardTitle, CardHeader, CardContent, CardFooter } from "../ui/card";
import { FormField, FormLabel, FormItem, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { EncryptedText } from "../ui/encrypted-text";
import { Heading } from "../Heading";


const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null> (null);
    const [isLoading, setIsLoading] = useState<boolean> (false);

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    });

    async function onSubmit(data: LoginInput) {
        setIsLoading(true);
        setError(null);
        try {
            const result = await signIn('credentials', {
                username: data.username,
                password: data.password,
                redirect: false,
            });
            if(result?.error) {
                setError(result.error);
                return;
            }
            router.push('/');
            router.refresh();
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
    <Card className="bg-black text-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl text-center font-bold -600">
            <Heading text="Apex Vault" className="text-6xl text-center font-bold -600" />
        </CardTitle>
        <CardDescription className="text-center">
            <EncryptedText text="Sign in to your account" flipDelayMs={100}/>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="apex_predator"
                      autoComplete="username"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      autoComplete="current-password"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary underline-offset-4 hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
    )
}

export default LoginForm;