
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
  LayoutDashboard,
  ChevronDown,
  CircleDot
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter
} from "@/components/ui/sidebar";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Define the types for our menu items
interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { 
    icon: Bus, 
    label: "Vehicle Management", 
    path: "/vehicles",
    subItems: [
      { label: "All Vehicles", path: "/vehicles/all" },
      { label: "Maintenance", path: "/vehicles/maintenance" }
    ] 
  },
  { 
    icon: Building2, 
    label: "Depot Management", 
    path: "/depots",
    subItems: [
      { label: "All Depots", path: "/depots/all" },
      { label: "All Contracts", path: "/depots/contracts" }
    ] 
  },
  { 
    icon: Users, 
    label: "Employee Management", 
    path: "/employees",
    subItems: [
      { label: "All Employees", path: "/employees/all" },
      { label: "Attendance", path: "/employees/attendance" }
    ] 
  },
  { 
    icon: MapPin, 
    label: "Route Shift Planning", 
    path: "/routes",
    subItems: [
      { label: "All Routes", path: "/routes/all" },
      { label: "Schedule", path: "/routes/schedule" }
    ] 
  },
  { 
    icon: FileText, 
    label: "Manual Records", 
    path: "/records",
    subItems: [
      { label: "Daily Logs", path: "/records/logs" },
      { label: "Archives", path: "/records/archives" }
    ] 
  },
  { 
    icon: Briefcase, 
    label: "MSRTC Operation", 
    path: "/operations",
    subItems: [
      { label: "Overview", path: "/operations/overview" },
      { label: "Performance", path: "/operations/performance" }
    ] 
  },
  { 
    icon: Shield, 
    label: "Role & Permission", 
    path: "/roles",
    subItems: [
      { label: "User Roles", path: "/roles/users" },
      { label: "Permissions", path: "/roles/permissions" }
    ] 
  },
  { 
    icon: Battery, 
    label: "Charging Network", 
    path: "/charging",
    subItems: [
      { label: "Stations", path: "/charging/stations" },
      { label: "Usage", path: "/charging/usage" }
    ] 
  },
  { 
    icon: BarChart3, 
    label: "Reports", 
    path: "/reports",
    subItems: [
      { label: "Analytics", path: "/reports/analytics" },
      { label: "Financial", path: "/reports/financial" }
    ] 
  },
  { 
    icon: Settings, 
    label: "Settings", 
    path: "/settings",
    subItems: [
      { label: "Account", path: "/settings/account" },
      { label: "System", path: "/settings/system" }
    ] 
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const isSubPathActive = (mainPath: string) => {
    return location.pathname.startsWith(mainPath) && mainPath !== "/";
  };

  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2 rounded-lg shadow-md">
            <Bus className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">EVTracify</h1>
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
                  {item.subItems && item.subItems.length > 0 ? (
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      value={isSubPathActive(item.path) ? item.path : undefined}
                    >
                      <AccordionItem value={item.path} className="border-none">
                        <AccordionTrigger className="py-0">
                          <SidebarMenuButton
                            isActive={isSubPathActive(item.path)}
                            tooltip={item.label}
                            className="w-full"
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0 pt-1">
                          <SidebarMenuSub>
                            {item.subItems.map((subItem, subIndex) => (
                              <SidebarMenuSubItem key={subIndex}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={location.pathname === subItem.path}
                                >
                                  <Link to={subItem.path} className="pl-9">
                                    <CircleDot className="h-3 w-3" />
                                    <span>{subItem.label}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SidebarMenuButton
                      isActive={location.pathname === item.path}
                      asChild 
                      tooltip={item.label}
                    >
                      <Link to={item.path} className="w-full">
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
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
          <div className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-medium">
            Live Status
          </div>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
