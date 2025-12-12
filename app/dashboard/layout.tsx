import { ClerkLoaded } from "@clerk/nextjs";
import Header from "@/components/Header";

function DashboardLayout({children}: {children: React.ReactNode}) {
   
   return (

       <ClerkLoaded>
<Header/>

<main className="flex-1 overflow-y-auto">{children}</main> 
    </ClerkLoaded>
) 
}


export default DashboardLayout;