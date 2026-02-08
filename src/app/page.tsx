"use client";

import { useSession, signOut } from "next-auth/react";
import { Heading } from "@/components/Heading";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, LogOut, Shield } from "lucide-react";

const NAV_ITEMS = [
  {
    title: "Practicals",
    description: "Browse subject-wise practical notes with syntax-highlighted code",
    href: "/practicals",
    icon: BookOpen,
  },
];

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      {/* Hero Section */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
        <Shield className="h-8 w-8 text-blue-400" />
      </div>

      <Heading text="Apex Vault" className="text-6xl font-bold" />

      <p className="mt-4 text-center text-zinc-400 max-w-md">
        <EncryptedText
          text={
            session?.user?.name
              ? `Welcome back, ${session.user.name}`
              : "Your secure academic vault"
          }
          flipDelayMs={80}
          revealDelayMs={40}
        />
      </p>

      {/* Navigation Cards */}
      <div className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group block"
            >
              <div className="relative z-10 flex items-center gap-5 rounded-xl border border-zinc-800 bg-black p-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-zinc-950">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-blue-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          );
        })}
      </div>

      {/* Sign Out */}
      {session && (
        <div className="mt-10">
          <Button
            variant="ghost"
            className="text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
