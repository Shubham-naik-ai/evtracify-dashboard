
import { Link } from "react-router-dom";
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
  Search
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
  { icon: Home, label: "Dashboard", path: "/" },
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
  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <Bus className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold">EVTracify</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild tooltip={item.label}>
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

      <SidebarFooter className="p-4">
        <div className="text-xs text-gray-500">
          EVTracify Dashboard v1.0
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
