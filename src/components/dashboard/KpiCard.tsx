
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  linkTo?: string;
  subtitle?: string;
  subtitleValue?: string | number;
  color?: "blue" | "green" | "yellow" | "red" | "purple" | "indigo" | "cyan" | "teal" | "amber";
  trend?: "up" | "down";
  trendValue?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const colorMappings = {
  blue: { 
    gradientFrom: "from-blue-500", 
    gradientTo: "to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700", 
    border: "border-blue-200",
    iconBg: "bg-blue-100/80"
  },
  green: { 
    gradientFrom: "from-green-500", 
    gradientTo: "to-green-600",
    bgLight: "bg-green-50",
    textColor: "text-green-700", 
    border: "border-green-200",
    iconBg: "bg-green-100/80"
  },
  yellow: { 
    gradientFrom: "from-amber-400", 
    gradientTo: "to-amber-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-700", 
    border: "border-amber-200",
    iconBg: "bg-amber-100/80"
  },
  red: { 
    gradientFrom: "from-red-500", 
    gradientTo: "to-red-600",
    bgLight: "bg-red-50",
    textColor: "text-red-700", 
    border: "border-red-200",
    iconBg: "bg-red-100/80"
  },
  purple: { 
    gradientFrom: "from-purple-500", 
    gradientTo: "to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-700", 
    border: "border-purple-200",
    iconBg: "bg-purple-100/80"
  },
  indigo: { 
    gradientFrom: "from-indigo-500", 
    gradientTo: "to-indigo-600",
    bgLight: "bg-indigo-50",
    textColor: "text-indigo-700", 
    border: "border-indigo-200",
    iconBg: "bg-indigo-100/80"
  },
  cyan: { 
    gradientFrom: "from-cyan-500", 
    gradientTo: "to-cyan-600",
    bgLight: "bg-cyan-50",
    textColor: "text-cyan-700", 
    border: "border-cyan-200",
    iconBg: "bg-cyan-100/80"
  },
  teal: { 
    gradientFrom: "from-teal-500", 
    gradientTo: "to-teal-600",
    bgLight: "bg-teal-50",
    textColor: "text-teal-700", 
    border: "border-teal-200",
    iconBg: "bg-teal-100/80"
  },
  amber: { 
    gradientFrom: "from-amber-500", 
    gradientTo: "to-amber-600",
    bgLight: "bg-amber-50",
    textColor: "text-amber-700", 
    border: "border-amber-200",
    iconBg: "bg-amber-100/80"
  }
};

const trendColorClasses = {
  up: "text-green-600 bg-green-50 border-green-200",
  down: "text-red-600 bg-red-50 border-red-200"
};

const KpiCard = ({ 
  title, 
  value, 
  icon, 
  linkTo, 
  subtitle, 
  subtitleValue,
  color = "blue",
  trend,
  trendValue,
  gradientFrom,
  gradientTo
}: KpiCardProps) => {
  const colorMapping = colorMappings[color];
  const customGradient = gradientFrom && gradientTo;
  
  const content = (
    <div className={`border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group ${colorMapping.border} ${colorMapping.bgLight}`}>
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full ${customGradient ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}` : `bg-gradient-to-r ${colorMapping.gradientFrom} ${colorMapping.gradientTo}`}`}></div>
      
      <div className="p-5 relative">
        <div className="flex justify-between items-start">
          <div className="z-10">
            <h3 className="text-sm font-medium opacity-80">{title}</h3>
            <p className={`text-2xl font-bold mt-2 ${colorMapping.textColor}`}>{value}</p>
            
            {trend && trendValue && (
              <div className={`inline-flex items-center text-xs font-medium rounded-full px-2.5 py-1 mt-3 border ${trendColorClasses[trend]}`}>
                {trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {trendValue}
              </div>
            )}
            
            {subtitle && (
              <div className="mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs opacity-70">{subtitle}:</span>
                  <span className="text-xs font-medium">{subtitleValue}</span>
                </div>
                <div className="h-1.5 bg-white/70 rounded-full mt-1 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${customGradient ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}` : `bg-gradient-to-r ${colorMapping.gradientFrom} ${colorMapping.gradientTo}`}`}
                    style={{ 
                      width: typeof subtitleValue === 'number' && typeof value === 'number' 
                        ? `${(subtitleValue / value) * 100}%` 
                        : '10%' 
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Icon with animation and gradient */}
          <div className={`p-3 rounded-full ${colorMapping.iconBg} group-hover:scale-105 transition-transform z-10`}>
            <div className={`${customGradient ? `text-gradient bg-gradient-to-br ${gradientFrom} ${gradientTo}` : `text-gradient bg-gradient-to-br ${colorMapping.gradientFrom} ${colorMapping.gradientTo}`}`}>
              {icon}
            </div>
          </div>
          
          {/* Background decorative element */}
          <div className={`absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${customGradient ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}` : `bg-gradient-to-br ${colorMapping.gradientFrom} ${colorMapping.gradientTo}`}`}></div>
        </div>
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo} className="block">{content}</Link>;
  }

  return content;
};

export default KpiCard;
