
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Bus, 
  Building2, 
  Users, 
  MapPin, 
  FileText, 
  Briefcase, 
  Shield, 
  Battery, 
  BarChart3, 
  Settings,
  LayoutDashboard
} from "lucide-react";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Bus, label: "Vehicle Management", path: "/vehicles" },
  { icon: Building2, label: "Depot Management", path: "/depots" },
  { icon: Users, label: "Employee Management", path: "/employees" },
  { icon: MapPin, label: "Route Shift Planning", path: "/routes" },
  { icon: FileText, label: "Manual Records", path: "/records" },
  { icon: Briefcase, label: "MSRTC Operation", path: "/operations" },
  { icon: Shield, label: "Role & Permission", path: "/roles" },
  { icon: Battery, label: "Charging Network", path: "/charging" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Bus className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">EVTracify</h1>
            <p className="text-xs text-muted-foreground">EV Fleet Management</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    active={location.pathname === item.path}
                    asChild 
                    tooltip={item.label}
                  >
                    <Link to={item.path} className="w-full">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            EVTracify v1.2.0
          </div>
          <div className="text-xs text-blue-600 font-medium">
            Live Status
          </div>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
