"use client";
import {
  ShieldQuestion,
  Home,
  TrendingUp,
  BookMarked,
  ArrowRightLeft,
} from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NavUser } from "@/components/nav-user";
import { doSocialLogin } from "@/app/actions";
import { useSession } from "next-auth/react";
import { log } from "console";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: ArrowRightLeft,
  },
  {
    title: "Donate Here",
    url: "/donate",
    icon: TrendingUp,
  },
  {
    title: "FAQ",
    url: "#",
    icon: ShieldQuestion,
  },
  {
    title: "Learning Modules",
    url: "#",
    icon: BookMarked,
  },
];


//AppSidebar component with props
export function AppSidebar() {
  const session = useSession();
  const data = session.data;
  const [udata, setData] = React.useState<{
    name: string;
    email: string;
    image: string;
  }>({
    name: "",
    email: "",
    image: "",});
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    if (session.data?.user) {
      // ✅ Check if user exists
      setData({
        name: session.data.user.name ?? "",
        email: session.data.user.email ?? "",
        image: session.data.user.image ?? "",
      });
      setIsLogin(true); 
    } else {
      setIsLogin(false);
    }
  }, [data]);
  return (
    <Sidebar>
      <SidebarContent className="bg-[#C7DB9C]">
        <h1 className="mx-4 mt-4 text-2xl">BKP Fundaiser</h1>
        <SidebarGroup>
          <SidebarGroupLabel className="mx-1">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="my-1" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="text-lg" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#C7DB9C]">
        {isLogin ? (
          <NavUser user={udata} setLogin={setIsLogin} />
        ) : (
          <Button
            onClick={doSocialLogin}
            variant="outline"
            className="w-full mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Login with Google
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
