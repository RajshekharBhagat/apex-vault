import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/Heading";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Button } from "@/components/ui/button";

const NotAvailablePage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
        <ShieldAlert className="h-8 w-8 text-blue-400" />
      </div>

      <Heading text="Apex Vault" className="text-6xl font-bold" />

      <p className="mt-4 text-center text-zinc-400 max-w-md">
        <EncryptedText
          text="This website is currently unavailable."
          flipDelayMs={80}
          revealDelayMs={40}
        />
      </p>

      <div className="mt-10 w-full max-w-xl">
        <div className="relative group block">
          <div className="relative z-10 rounded-xl border border-zinc-800 bg-black p-6 text-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-zinc-950">
            <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
              Access Temporarily Disabled
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              The site has been restricted by configuration. Please try again later
              or contact the administrator.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" className="border-zinc-700 bg-black text-zinc-200 hover:bg-zinc-900 hover:text-white">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 rounded-xl bg-blue-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};

export default NotAvailablePage;