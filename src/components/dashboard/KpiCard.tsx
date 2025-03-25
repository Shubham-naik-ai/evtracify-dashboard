
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
  color?: "blue" | "green" | "yellow" | "red" | "purple" | "indigo";
  trend?: "up" | "down";
  trendValue?: string;
}

const colorClasses = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  green: "bg-green-50 text-green-700 border-green-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  red: "bg-red-50 text-red-700 border-red-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200"
};

const iconColorClasses = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
  purple: "bg-purple-100 text-purple-700",
  indigo: "bg-indigo-100 text-indigo-700"
};

const trendColorClasses = {
  up: "text-green-600 bg-green-50",
  down: "text-red-600 bg-red-50"
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
  trendValue
}: KpiCardProps) => {
  const content = (
    <div className={`border rounded-xl p-5 relative hover:shadow-md transition-all duration-300 ${colorClasses[color]}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium opacity-80">{title}</h3>
          <p className="text-2xl font-bold mt-2">{value}</p>
          
          {trend && trendValue && (
            <div className={`inline-flex items-center text-xs font-medium rounded-full px-2 py-0.5 mt-2 ${trendColorClasses[trend]}`}>
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
              <div className="h-1.5 bg-white/50 rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-current rounded-full" 
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
        <div className={`p-3 rounded-full ${iconColorClasses[color]}`}>
          {icon}
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
