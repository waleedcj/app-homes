import type { FunctionComponent } from "@/common/types";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

export const Card = ({ title, description, imageUrl, className = "" }: CardProps): FunctionComponent => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}; 