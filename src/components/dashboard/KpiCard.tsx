
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  linkTo?: string;
  subtitle?: string;
  subtitleValue?: string | number;
  color?: "blue" | "green" | "yellow" | "red" | "purple" | "indigo";
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

const KpiCard = ({ 
  title, 
  value, 
  icon, 
  linkTo, 
  subtitle, 
  subtitleValue,
  color = "blue" 
}: KpiCardProps) => {
  const content = (
    <div className={`border rounded-lg p-4 relative hover:shadow-md transition-shadow ${colorClasses[color]}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium opacity-80">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {subtitle && (
            <div className="mt-2 flex items-center">
              <span className="text-xs opacity-70">{subtitle}:</span>
              <span className="text-xs font-medium ml-1">{subtitleValue}</span>
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
