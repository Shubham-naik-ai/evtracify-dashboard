
import { 
  Building2, 
  Bus, 
  MapPin, 
  Calendar, 
  PcCase, 
  Network, 
  Route, 
  Users, 
  User, 
  Wrench,
  Battery,
  BarChart3
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import KpiCard from "@/components/dashboard/KpiCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">EV Fleet Overview</h1>
            <p className="text-muted-foreground mt-1">Monitor and manage your electric bus operations</p>
          </div>
          <div className="flex items-center gap-4">
            <ToggleGroup type="single" defaultValue="day">
              <ToggleGroupItem value="day" variant="outline">Day</ToggleGroupItem>
              <ToggleGroupItem value="week" variant="outline">Week</ToggleGroupItem>
              <ToggleGroupItem value="month" variant="outline">Month</ToggleGroupItem>
            </ToggleGroup>
            <Badge variant="outline" className="flex items-center gap-1 py-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Updated 3m ago
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="fleet" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="fleet">Fleet Status</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fleet" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <KpiCard 
                title="Total Depots" 
                value="49" 
                icon={<Building2 className="h-5 w-5" />}
                linkTo="/depots"
                color="blue"
                trend="up"
                trendValue="3%"
              />
              
              <KpiCard 
                title="Total Vehicles" 
                value="2,225" 
                icon={<Bus className="h-5 w-5" />}
                linkTo="/vehicles"
                color="green"
                trend="up"
                trendValue="12%"
              />
              
              <KpiCard 
                title="In Depot" 
                value="1,078" 
                icon={<Building2 className="h-5 w-5" />}
                linkTo="/vehicles?status=in-depot"
                color="indigo"
                trend="down"
                trendValue="5%"
              />
              
              <KpiCard 
                title="On Route" 
                value="921" 
                icon={<Route className="h-5 w-5" />}
                linkTo="/vehicles?status=on-route"
                color="purple"
                trend="up"
                trendValue="8%"
              />
              
              <KpiCard 
                title="Total Routes" 
                value="296" 
                icon={<MapPin className="h-5 w-5" />}
                linkTo="/routes"
                color="yellow"
              />
              
              <KpiCard 
                title="Total Schedules" 
                value="1,037" 
                icon={<Calendar className="h-5 w-5" />}
                subtitle="To Be Allocated"
                subtitleValue="1,037"
                color="blue"
              />
              
              <KpiCard 
                title="Total Devices" 
                value="2,225" 
                icon={<PcCase className="h-5 w-5" />}
                subtitle="Active"
                subtitleValue="131"
                color="green"
              />
              
              <KpiCard 
                title="Total CAN Vehicles" 
                value="2,225" 
                icon={<Network className="h-5 w-5" />}
                subtitle="Active"
                subtitleValue="131"
                color="indigo"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="operations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <KpiCard 
                title="Total Kilometers Driven" 
                value="331,518,824" 
                icon={<Route className="h-5 w-5" />}
                color="purple"
                trend="up"
                trendValue="15%"
              />
              
              <KpiCard 
                title="Average Battery Level" 
                value="76%" 
                icon={<Battery className="h-5 w-5" />}
                color="green"
                trend="up"
                trendValue="2%"
              />
              
              <KpiCard 
                title="Daily Trips" 
                value="1,254" 
                icon={<Bus className="h-5 w-5" />}
                color="blue"
                trend="up"
                trendValue="5%"
              />
              
              <KpiCard 
                title="Performance Index" 
                value="94.3%" 
                icon={<BarChart3 className="h-5 w-5" />}
                color="yellow"
                trend="up"
                trendValue="1.2%"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <KpiCard 
                title="Vehicles Under Maintenance" 
                value="23" 
                icon={<Wrench className="h-5 w-5" />}
                linkTo="/maintenance"
                color="red"
                trend="down"
                trendValue="12%"
              />
              
              <KpiCard 
                title="Scheduled Maintenance" 
                value="45" 
                icon={<Calendar className="h-5 w-5" />}
                color="yellow"
                trend="up"
                trendValue="8%"
              />
              
              <KpiCard 
                title="Average Downtime" 
                value="2.3 days" 
                icon={<Bus className="h-5 w-5" />}
                color="indigo"
                trend="down"
                trendValue="15%"
              />
              
              <KpiCard 
                title="Maintenance Costs" 
                value="₹1.2M" 
                icon={<Wrench className="h-5 w-5" />}
                color="blue"
                trend="up"
                trendValue="3%"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <KpiCard 
                title="Total Users" 
                value="97" 
                icon={<Users className="h-5 w-5" />}
                color="yellow"
                trend="up"
                trendValue="5%"
              />
              
              <KpiCard 
                title="Contracted Users" 
                value="0" 
                icon={<User className="h-5 w-5" />}
                linkTo="/users?type=contracted"
                color="blue"
              />
              
              <KpiCard 
                title="Inhouse Users" 
                value="0" 
                icon={<User className="h-5 w-5" />}
                linkTo="/users?type=inhouse"
                color="green"
              />
              
              <KpiCard 
                title="Active Today" 
                value="82" 
                icon={<Users className="h-5 w-5" />}
                color="purple"
                trend="up"
                trendValue="7%"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
