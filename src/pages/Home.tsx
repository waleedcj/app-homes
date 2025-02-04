import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";
import HeroImage from "@/assets/images/heroImage.webp";
import Carousel from "@/components/ui/carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const slideData = [
	{
		src: HeroImage,
	},
	{
		src: HeroImage,
	},
	{
		src: HeroImage,
	},
];

export const Home = (): FunctionComponent => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 5;
	// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<MainLayout>
			<div className="container mx-auto py-12 px-4">
				<section className="flex flex-col md:flex-row items-center justify-between gap-8">
					{/* Text Content */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h5 className="text-lg text-gray-600 mb-2">
							It's Time for You to Have
						</h5>
						<h1 className="text-6xl font-bold text-primary mb-4">
							The Garden of Your Dreams
						</h1>
						<p className="text-xl text-brand-black mb-8">
							Click edit button to change this text. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Ut elit tellus, luctus nec
							ullamcorper mattis, pulvinar dapibus leo.
						</p>
						{/* <h3 className="text-2xl text-secondary">+1 910-626-85255</h3> */}
						<button className="bg-accent text-neutral px-8 py-3 rounded-lg hover:bg-secondary group relative block transition-transform duration-300 ease-in-out hover:-translate-y-[5px]">
							Get a qoute in the next 30 mins!
						</button>
					</div>

					{/* Hero Image with Custom Clip Path */}
					{/* Carousel Container */}
					<div className="w-full md:w-1/2 relative overflow-hidden">
						<Carousel slides={slideData} options={OPTIONS} />
					</div>
				</section>
			</div>
		</MainLayout>
	);
};
