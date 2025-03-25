
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// First Bus KM/SOC Gauge Chart
export const FirstBusKmSocGauge = ({ value = 1.9 }) => {
  const percentage = (value / 3) * 100; // Assuming 3 is max value
  
  return (
    <div className="relative mt-4 flex flex-col items-center justify-center text-center">
      <div className="relative h-48 w-48">
        <svg className="h-full w-full" viewBox="0 0 100 50">
          {/* Background Arc */}
          <path
            d="M 10 50 A 40 40 0 1 1 90 50"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Progress Arc */}
          <path
            d="M 10 50 A 40 40 0 1 1 90 50"
            fill="none"
            stroke="url(#gradient)"
            strokeDasharray="175.3"
            strokeDashoffset={175.3 - (175.3 * percentage) / 100}
            strokeWidth="8"
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          {/* Value Text */}
          <text
            x="50"
            y="45"
            fontSize="20"
            fontWeight="bold"
            textAnchor="middle"
            fill="#1e40af"
          >
            {value}
          </text>
        </svg>
      </div>
      <div className="mt-2 text-lg font-medium text-blue-700">KM/SOC</div>
      <div className="mt-1 text-sm text-gray-500">
        Efficiency Rating: {value < 1.5 ? 'Poor' : value < 2.0 ? 'Average' : 'Good'}
      </div>
    </div>
  );
};

// Date-wise Loss KMs Bar Chart
export const DatewiseLossKmChart = () => {
  const data = [
    { date: 'Dec 1', scheduledKM: 50000, actualKM: 48000, lossKM: 2000 },
    { date: 'Dec 2', scheduledKM: 52000, actualKM: 49000, lossKM: 3000 },
    { date: 'Dec 3', scheduledKM: 51000, actualKM: 47000, lossKM: 4000 },
    { date: 'Dec 4', scheduledKM: 53000, actualKM: 48500, lossKM: 4500 },
    { date: 'Dec 5', scheduledKM: 54000, actualKM: 50000, lossKM: 4000 },
    { date: 'Dec 6', scheduledKM: 55000, actualKM: 52000, lossKM: 3000 },
    { date: 'Dec 7', scheduledKM: 56000, actualKM: 53000, lossKM: 3000 },
    { date: 'Dec 8', scheduledKM: 57000, actualKM: 54000, lossKM: 3000 },
    { date: 'Dec 9', scheduledKM: 58000, actualKM: 55000, lossKM: 3000 },
    { date: 'Dec 10', scheduledKM: 59000, actualKM: 56000, lossKM: 3000 },
  ];

  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          scheduledKM: {
            label: "Scheduled KM",
            color: "#4F46E5"
          },
          actualKM: {
            label: "Actual KM",
            color: "#EC4899"
          },
          lossKM: {
            label: "Loss KM",
            color: "#EF4444"
          },
        }}
      >
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Legend />
          <Bar dataKey="scheduledKM" name="Scheduled KM" fill="var(--color-scheduledKM)" />
          <Bar dataKey="actualKM" name="Actual KM" fill="var(--color-actualKM)" />
          <Bar dataKey="lossKM" name="Loss KM" fill="var(--color-lossKM)" />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// Loss KMs by Routes Table
export const LossKmByRoutesTable = () => {
  const data = [
    { route: 'PUNE STATION TO BHOSARI', lossKM: '8,838.6' },
    { route: 'NIGDI TO HEWLEWADI', lossKM: '5,098.2' },
    { route: 'KATRAJ TO HADAPSAR', lossKM: '4,967.5' },
    { route: 'SWARGATE TO AKURDI', lossKM: '4,582.1' },
    { route: 'KOTHRUD TO VIMAN NAGAR', lossKM: '3,749.8' },
  ];

  return (
    <div className="max-h-80 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Route Details</TableHead>
            <TableHead className="text-right font-medium">Loss KM</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.route}</TableCell>
              <TableCell className="text-right">{item.lossKM}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Loss KMs by Route and Loss Reasons Stacked Bar Chart
export const LossKmByRouteAndReasonsChart = () => {
  const data = [
    { 
      route: 'PUNE STATION TO BHOSARI', 
      'No Bus Charging': 2500, 
      'Heavy Traffic': 2000, 
      'Maintenance': 1800, 
      'Breakdown': 1000,
      'No Bus Conductor': 800,
      'Driver Not Available': 700,
    },
    { 
      route: 'NIGDI TO HEWLEWADI', 
      'No Bus Charging': 1500, 
      'Heavy Traffic': 1200, 
      'Maintenance': 900, 
      'Breakdown': 800,
      'No Bus Conductor': 400,
      'Driver Not Available': 300,
    },
    { 
      route: 'KATRAJ TO HADAPSAR', 
      'No Bus Charging': 1400, 
      'Heavy Traffic': 1100, 
      'Maintenance': 1000, 
      'Breakdown': 700,
      'No Bus Conductor': 500,
      'Driver Not Available': 200,
    },
    { 
      route: 'SWARGATE TO AKURDI', 
      'No Bus Charging': 1300, 
      'Heavy Traffic': 1100, 
      'Maintenance': 900, 
      'Breakdown': 650,
      'No Bus Conductor': 450,
      'Driver Not Available': 150,
    },
  ];

  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          'No Bus Charging': {
            label: "No Bus Charging",
            color: "#4F46E5"
          },
          'Heavy Traffic': {
            label: "Heavy Traffic",
            color: "#10B981"
          },
          'Maintenance': {
            label: "Maintenance",
            color: "#F59E0B"
          },
          'Breakdown': {
            label: "Breakdown",
            color: "#EF4444"
          },
          'No Bus Conductor': {
            label: "No Bus Conductor",
            color: "#8B5CF6"
          },
          'Driver Not Available': {
            label: "Driver Not Available",
            color: "#0EA5E9"
          },
        }}
      >
        <BarChart 
          layout="vertical" 
          data={data} 
          margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="route" width={120} />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Legend />
          <Bar dataKey="No Bus Charging" stackId="a" fill="var(--color-No Bus Charging)" />
          <Bar dataKey="Heavy Traffic" stackId="a" fill="var(--color-Heavy Traffic)" />
          <Bar dataKey="Maintenance" stackId="a" fill="var(--color-Maintenance)" />
          <Bar dataKey="Breakdown" stackId="a" fill="var(--color-Breakdown)" />
          <Bar dataKey="No Bus Conductor" stackId="a" fill="var(--color-No Bus Conductor)" />
          <Bar dataKey="Driver Not Available" stackId="a" fill="var(--color-Driver Not Available)" />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// Buses by Loss Reasons Table
export const BusesByLossReasonsTable = () => {
  const data = [
    { reason: 'Heavy Traffic', buses: 168, incidents: 997 },
    { reason: 'No Bus Charging', buses: 121, incidents: 1551 },
    { reason: 'Maintenance', buses: 97, incidents: 832 },
    { reason: 'Breakdown', buses: 83, incidents: 621 },
    { reason: 'Driver Not Available', buses: 72, incidents: 487 },
  ];

  return (
    <div className="max-h-80 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Loss Reasons</TableHead>
            <TableHead className="text-right font-medium">No. of Buses</TableHead>
            <TableHead className="text-right font-medium">No. of Incidents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.reason}</TableCell>
              <TableCell className="text-right">{item.buses}</TableCell>
              <TableCell className="text-right">{item.incidents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Loss KMs by Reasons Horizontal Bar Chart
export const LossKmByReasonsChart = () => {
  const data = [
    { reason: 'No Bus Charging', lossKM: 29755.15 },
    { reason: 'Heavy Traffic', lossKM: 28676.7 },
    { reason: 'Maintenance', lossKM: 19018.5 },
    { reason: 'Breakdown', lossKM: 16452.3 },
    { reason: 'No Bus Conductor', lossKM: 12761.8 },
    { reason: 'Driver Not Available', lossKM: 10385.2 },
  ];

  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          lossKM: {
            label: "Loss KM",
            color: "#4F46E5"
          },
        }}
      >
        <BarChart 
          layout="vertical" 
          data={data} 
          margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="reason" width={120} />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Legend />
          <Bar dataKey="lossKM" name="Loss KM" fill="var(--color-lossKM)">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4F46E5' : '#6366F1'} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// Loss KMs by Responsibility Vertical Bar Chart
export const LossKmByResponsibilityChart = () => {
  const data = [
    { responsibility: 'Operations', lossKM: 58487.1 },
    { responsibility: 'Service', lossKM: 25984.45 },
    { responsibility: 'Authority', lossKM: 18637.2 },
    { responsibility: 'Operator', lossKM: 12941.8 },
  ];

  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          lossKM: {
            label: "Loss KM",
            color: "#4F46E5"
          },
        }}
      >
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="responsibility" />
          <YAxis />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Legend />
          <Bar dataKey="lossKM" name="Loss KM" fill="var(--color-lossKM)">
            {data.map((entry, index) => {
              const colors = ['#4F46E5', '#EC4899', '#F59E0B', '#10B981'];
              return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
            })}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// Bus-wise Loss KMs Table
export const BusWiseLossKmTable = () => {
  const data = [
    { busNo: 'MH12HS9981', lossKM: '3,127.4' },
    { busNo: 'MH12BVX567', lossKM: '2,069.9' },
    { busNo: 'MH12AB4148', lossKM: '1,987.5' },
    { busNo: 'MH12CD5693', lossKM: '1,874.2' },
    { busNo: 'MH12EF7821', lossKM: '1,762.8' },
    { busNo: 'MH12GH3456', lossKM: '1,689.3' },
  ];

  return (
    <div className="max-h-80 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Bus Registration No.</TableHead>
            <TableHead className="text-right font-medium">Loss KM</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.busNo}</TableCell>
              <TableCell className="text-right">{item.lossKM}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Month-wise Loss KMs Vertical Bar Chart
export const MonthWiseLossKmChart = () => {
  const data = [
    { month: 'Apr', lossKM: 95000 },
    { month: 'May', lossKM: 88000 },
    { month: 'Jun', lossKM: 92000 },
    { month: 'Jul', lossKM: 94000 },
    { month: 'Aug', lossKM: 97000 },
    { month: 'Sep', lossKM: 105000 },
    { month: 'Oct', lossKM: 110000 },
    { month: 'Nov', lossKM: 120000 },
    { month: 'Dec', lossKM: 105000 },
  ];

  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          lossKM: {
            label: "Loss KM",
            color: "#4F46E5"
          },
        }}
      >
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Legend />
          <Bar dataKey="lossKM" name="Loss KM" fill="var(--color-lossKM)">
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.month === 'Nov' ? '#EF4444' : '#4F46E5'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};
