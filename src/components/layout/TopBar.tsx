
import { Bell, Moon, Sun, Search, Settings, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
        <div className="w-64">
          <Select>
            <SelectTrigger className="border-none shadow-none focus:ring-0">
              <SelectValue placeholder="Select Depot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Depots</SelectItem>
              <SelectItem value="mumbai">Mumbai Depot</SelectItem>
              <SelectItem value="pune">Pune Depot</SelectItem>
              <SelectItem value="nagpur">Nagpur Depot</SelectItem>
              <SelectItem value="nashik">Nashik Depot</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
          />
        </div>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center" variant="destructive">3</Badge>
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
        
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-3 border-l pl-4 ml-2">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
            AD
          </div>
          <div className="text-sm">
            <div className="font-medium">Admin User</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
