'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { TransactionTable } from "@/components/table";
import { useSession } from "next-auth/react";
export default function Transaction() {
   const { data: session } = useSession();
   console.log(session);
   
  return (
    <div>
      
      <div className="flex items-center gap-2 h-16 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage className="">Transactions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="text-2xl"> Progress going on....</h1>
      <div className="w-2/3 mx-auto mt-8 rounded-xl border-2  border-[#FFF0BD] shadow-xl p-4">
        <TransactionTable/>
      </div>
    </div>
  );
}
