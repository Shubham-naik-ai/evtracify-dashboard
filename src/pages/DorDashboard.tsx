
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import KpiCard from "@/components/dashboard/KpiCard";
import { 
  Bus, 
  Route, 
  CalendarDays, 
  Battery, 
  AlertTriangle,
  ArrowLeft,
  CalendarRange,
  Building
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FirstBusKmSocGauge,
  DatewiseLossKmChart,
  LossKmByRoutesTable,
  LossKmByRouteAndReasonsChart,
  BusesByLossReasonsTable,
  LossKmByReasonsChart,
  LossKmByResponsibilityChart,
  BusWiseLossKmTable,
  MonthWiseLossKmChart
} from "@/components/charts/dor-charts";

const DorDashboard = () => {
  const navigate = useNavigate();
  const [month, setMonth] = useState("december");
  const [depot, setDepot] = useState("all");
  const [busType, setBusType] = useState("all");
  const [busRegNo, setBusRegNo] = useState("all");
  const [lossReason, setLossReason] = useState("all");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Back button */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-muted-foreground" 
            onClick={() => navigate("/records")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Records</span>
          </Button>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DOR Analysis
            </h1>
            <p className="text-muted-foreground">
              Comprehensive analysis of Daily Operation Records
            </p>
          </div>

          {/* Time period selector */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <CalendarRange className="mr-2 h-3.5 w-3.5" />
              Last 7 days
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <CalendarRange className="mr-2 h-3.5 w-3.5" />
              Last 30 days
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <CalendarRange className="mr-2 h-3.5 w-3.5" />
              Custom
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Month</label>
                <Select value={month} onValueChange={setMonth}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Months</SelectItem>
                    <SelectItem value="december">December 2024</SelectItem>
                    <SelectItem value="november">November 2024</SelectItem>
                    <SelectItem value="october">October 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Depot</label>
                <Select value={depot} onValueChange={setDepot}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Depot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Depots</SelectItem>
                    <SelectItem value="pune">Pune Depot</SelectItem>
                    <SelectItem value="mumbai">Mumbai Depot</SelectItem>
                    <SelectItem value="nashik">Nashik Depot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Bus Type</label>
                <Select value={busType} onValueChange={setBusType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Bus Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Bus Registration No.</label>
                <Select value={busRegNo} onValueChange={setBusRegNo}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Bus Reg No" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Buses</SelectItem>
                    <SelectItem value="MH12HS9981">MH12HS9981</SelectItem>
                    <SelectItem value="MH12BVX567">MH12BVX567</SelectItem>
                    <SelectItem value="MH12AB4148">MH12AB4148</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Loss Reason</label>
                <Select value={lossReason} onValueChange={setLossReason}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Loss Reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Reasons</SelectItem>
                    <SelectItem value="heavyTraffic">Heavy Traffic</SelectItem>
                    <SelectItem value="noCharging">No Bus Charging</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          <KpiCard 
            title="Scheduled Buses"
            value="312"
            color="blue"
            icon={<Bus className="h-5 w-5" />}
          />
          <KpiCard 
            title="Scheduled KM"
            value="1,955,861"
            color="green"
            icon={<Route className="h-5 w-5" />}
          />
          <KpiCard 
            title="Operated KM"
            value="1,861,430"
            color="cyan"
            icon={<CalendarDays className="h-5 w-5" />}
          />
          <KpiCard 
            title="SOC Consumed"
            value="923,255"
            color="amber"
            icon={<Battery className="h-5 w-5" />}
          />
          <KpiCard 
            title="Accidents"
            value="62"
            color="red"
            icon={<AlertTriangle className="h-5 w-5" />}
          />
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* First Bus KM/SOC Widget */}
          <Card className="border border-gray-100 shadow-sm overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">First Bus KM/SOC</CardTitle>
              <Badge variant="outline" className="mt-1 text-xs">
                Bus No: MH 12 AB 4148
              </Badge>
            </CardHeader>
            <CardContent>
              <FirstBusKmSocGauge value={1.9} />
            </CardContent>
          </Card>

          {/* Date-wise Loss KMs (Bar Chart) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Date-wise Loss KMs</CardTitle>
            </CardHeader>
            <CardContent>
              <DatewiseLossKmChart />
            </CardContent>
          </Card>

          {/* Loss KMs by Routes (Table) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Loss KMs by Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <LossKmByRoutesTable />
            </CardContent>
          </Card>

          {/* Loss KMs by Route and Loss Reasons (Stacked Bar Chart) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Loss KMs by Route and Reason</CardTitle>
            </CardHeader>
            <CardContent>
              <LossKmByRouteAndReasonsChart />
            </CardContent>
          </Card>

          {/* No. of Buses by Loss Reasons (Table) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">No. of Buses by Loss Reasons</CardTitle>
            </CardHeader>
            <CardContent>
              <BusesByLossReasonsTable />
            </CardContent>
          </Card>

          {/* Loss KMs by Reasons (Bar Chart - Horizontal) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Loss KMs by Reasons</CardTitle>
            </CardHeader>
            <CardContent>
              <LossKmByReasonsChart />
            </CardContent>
          </Card>

          {/* Loss KMs by Responsibility (Bar Chart - Vertical) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Loss KMs by Responsibility</CardTitle>
            </CardHeader>
            <CardContent>
              <LossKmByResponsibilityChart />
            </CardContent>
          </Card>

          {/* Bus-wise Loss KMs (Table) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Bus-wise Loss KMs</CardTitle>
            </CardHeader>
            <CardContent>
              <BusWiseLossKmTable />
            </CardContent>
          </Card>

          {/* Month-wise Loss KMs (Bar Chart - Vertical) */}
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Month-wise Loss KMs</CardTitle>
            </CardHeader>
            <CardContent>
              <MonthWiseLossKmChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DorDashboard;
