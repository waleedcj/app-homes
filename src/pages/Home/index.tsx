import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";
import HeroImage from "@/assets/images/heroimageone.webp";
import HeroImageThree from "@/assets/images/heroImageThreee.webp";
import HeroImageTwo from "@/assets/images/heroImageTwo.webp";
import Carousel from "@/components/ui/carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Values from "./values";
import Button from "@/components/ui/Button";
import HowItWorks from "./howItWorks";
import ServicesSection from "./services";

const slideData = [
	{
		src: HeroImage,
	},
	{
		src: HeroImageTwo,
	},
	{
		src: HeroImageThree,
	},
];

export const Home = (): FunctionComponent => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	return (
		<MainLayout>
			<div>
				<section className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center justify-between gap-8 my-8 py-12 px-4 md:px-0">
					{/* Text Content */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-6xl font-bold font-jakarta text-primary mb-4">
							Greener{" "}
							<span className="bg-gradient-to-r from-green-500 to-[#374836] inline-block text-transparent bg-clip-text">
								Spaces,
							</span>
							{" "}Happier{" "}
							<span className="bg-gradient-to-r from-green-500 to-[#374836] inline-block text-transparent bg-clip-text">
							Places.
							</span>
						</h1>

						<p className="text-xl font-normal text-primary mb-8 italic">
							Experience a harmonious blend of nature and design. Let us craft a
							breathtaking landscape that reflects your vision and enhances your
							space.
						</p>
						<Button variant="primary" size="md" >
						Get a quote in the next 30 mins!
							</Button>
						{/* <button className="bg-accent text-xl text-neutral px-8 py-3 rounded-lg hover:bg-secondary group relative block transition-transform duration-300 ease-in-out hover:-translate-y-[5px]">
							Get a quote in the next 30 mins!
						</button> */}
					</div>

					{/* Hero Image with Custom Clip Path */}
					{/* Carousel Container */}
					<div className="w-full md:w-1/2 relative overflow-hidden">
						<Carousel slides={slideData} options={OPTIONS} />
					</div>
				</section>
				<HowItWorks />
				<Values />
				<ServicesSection />
			</div>
		</MainLayout>
	);
};
