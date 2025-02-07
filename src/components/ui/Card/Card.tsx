import type { FunctionComponent } from "@/common/types";
import { Card as Cards } from "./card.types";
import Icons from "@/assets/images/svgs/svgComponent";

interface ServiceCardProps {
	card: Cards;
}

// interface CardProps {
//   title: string;
//   description: string;
//   imageUrl?: string;
//   className?: string;
//   titleClass?: string;
//   textClass?: string;
// }

// export const Card = ({
//   title,
//   description,
//   imageUrl,
//   className = "",
//   titleClass = "text-primary",
//   textClass = "text-brand-black"
// }: CardProps): FunctionComponent => {
//   return (
//     <div className={`bg-neutral rounded-lg shadow-lg overflow-hidden border border-tertiary transition-all hover:shadow-xl ${className}`}>
//       {imageUrl && (
//         <div className="h-56 overflow-hidden">
//           <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
//         </div>
//       )}
//       <div className="p-6">
//         <h3 className={`text-xl font-bold mb-2 ${titleClass}`}>{title}</h3>
//         <p className={`${textClass}`}>{description}</p>
//       </div>
//     </div>
//   );
// };

export const Card = ({ card }: ServiceCardProps): FunctionComponent => {
	return (
		<div
			className={`group relative overflow-hidden hover:cursor-pointer rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl ${card.className}`}
			onClick={card.onClick}
		>
			{/* Image with overlay */}
			<div className="relative h-[400px] w-full">
				<img
					src={card.image || "/public/vite-react-boilerplate.png"}
					alt={card.title}
					className="object-contain"
				/>
				<div className="absolute inset-0 bg-black/40" />
			</div>

			{/* Content */}
			<div className="absolute inset-0 p-6 flex flex-col">
				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-auto">
					{card?.tags?.map((tag, index) => (
						<span
							key={index}
							className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm 
                         transition-all duration-300 ease-in-out 
                         hover:bg-white/30 hover:scale-105 hover:text-white 
                         cursor-pointer"
						>
							{tag.label}
						</span>
					))}
				</div>

				{/* Arrow Icon */}
				<div className="absolute top-6 right-6 ">
					<Icons
						tech="DownArrow"
						className="text-black w-6 h-6 transition-transform duration-300 group-hover:rotate-180 bg-icon-bg  rounded-full"
					/>
				</div>

				{/* Title and Description */}
				<div className="space-y-2">
					<h3 className="text-2xl font-bold text-white">{card.title}</h3>
					<p className="text-white/90">{card.description}</p>
				</div>
			</div>
		</div>
	);
};
