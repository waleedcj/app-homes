import type { FunctionComponent } from "@/common/types";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  titleClass?: string;
  textClass?: string;
}

export const Card = ({ 
  title, 
  description, 
  imageUrl, 
  className = "",
  titleClass = "text-primary",
  textClass = "text-brand-black"
}: CardProps): FunctionComponent => {
  return (
    <div className={`bg-neutral rounded-lg shadow-lg overflow-hidden border border-tertiary transition-all hover:shadow-xl ${className}`}>
      {imageUrl && (
        <div className="h-56 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${titleClass}`}>{title}</h3>
        <p className={`${textClass}`}>{description}</p>
      </div>
    </div>
  );
};