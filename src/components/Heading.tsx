import { Iceland } from "next/font/google"
import { cn } from "@/lib/utils"
import { EncryptedText } from "./ui/encrypted-text"

const iceland = Iceland({
    subsets: ['latin'],
    weight: ['400'],
})
export const Heading = ({text, className}: {text: string, className?: string}) => {
    return (
        <EncryptedText text={text} encryptedClassName="text-blue-300" revealedClassName="text-blue-500" className={cn("text-3xl text-center font-bold whitespace-nowrap", iceland.className, className)} />
    )
}