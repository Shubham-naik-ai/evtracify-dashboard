
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
  Tool
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import KpiCard from "@/components/dashboard/KpiCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">EV Bus Dashboard</h1>
          <p className="text-gray-500">Overview of your EV bus fleet and operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <KpiCard 
            title="Total Depots" 
            value="49" 
            icon={<Building2 className="h-5 w-5" />}
            linkTo="/depots"
            color="blue"
          />
          
          <KpiCard 
            title="Total Vehicles" 
            value="2,225" 
            icon={<Bus className="h-5 w-5" />}
            linkTo="/vehicles"
            color="green"
          />
          
          <KpiCard 
            title="In Depot" 
            value="1,078" 
            icon={<Building2 className="h-5 w-5" />}
            linkTo="/vehicles?status=in-depot"
            color="indigo"
          />
          
          <KpiCard 
            title="On Route" 
            value="921" 
            icon={<Route className="h-5 w-5" />}
            linkTo="/vehicles?status=on-route"
            color="purple"
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
          
          <KpiCard 
            title="Total Kilometers Driven" 
            value="331,518,824" 
            icon={<Route className="h-5 w-5" />}
            color="purple"
          />
          
          <KpiCard 
            title="Total Users" 
            value="97" 
            icon={<Users className="h-5 w-5" />}
            color="yellow"
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
            title="Vehicles Under Maintenance" 
            value="23" 
            icon={<Tool className="h-5 w-5" />}
            linkTo="/maintenance"
            color="red"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
