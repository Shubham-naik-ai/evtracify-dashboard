
import { FileQuestion } from "lucide-react";

interface ComingSoonProps {
  title: string;
}

const ComingSoon = ({ title }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-96 p-4">
      <div className="p-4 rounded-full bg-blue-50 mb-4">
        <FileQuestion className="h-12 w-12 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500 text-center max-w-md">
        This section is under development and will be available soon. Check back later for updates!
      </p>
    </div>
  );
};

export default ComingSoon;
