import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

const Header = () =>{
    return <div>
<Link href="/dashboard">
ChatFusionAI
</Link>

<SignedIn>
    <div className="flex justify-between">
        <Button asChild variant="link" >
            <Link href="/dashboard/upgrade">Pricing</Link>
        </Button>

        <Button asChild variant="outline" >
            <Link href="/dashboard/upload">
            <FilePlus2/>
            </Link>
        </Button>
        <UserButton />
    </div>
</SignedIn>
         </div>
}

export default Header;