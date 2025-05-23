
import { Heart, Activity, Apple, Moon, User, Home } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const healthItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Vitals", url: "/vitals", icon: Heart },
  { title: "Activity", url: "/activity", icon: Activity },
  { title: "Nutrition", url: "/nutrition", icon: Apple },
  { title: "Sleep", url: "/sleep", icon: Moon },
  { title: "Profile", url: "/profile", icon: User },
];

export function HealthSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isExpanded = healthItems.some((item) => isActive(item.url));

  return (
    <Sidebar 
      className={state === "collapsed" ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-green-600 font-semibold">
            Health Tracking
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {healthItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-green-100 text-green-700 font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
