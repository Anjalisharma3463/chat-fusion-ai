import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2, MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <MessageSquare className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold text-white">ChatFusionAI</span>
        </Link>

        {/* Right side actions */}
        <SignedIn>
          <div className="flex items-center gap-3">
            <Button asChild variant="link" className="text-gray-300 hover:text-white">
              <Link href="/dashboard/upgrade">Pricing</Link>
            </Button>

            <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800 hover:text-white">
              <Link href="/dashboard/upload" className="flex items-center gap-2">
                <FilePlus2 className="h-4 w-4" />
                <span className="hidden sm:inline">Upload</span>
              </Link>
            </Button>

            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9"
                }
              }}
            />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;