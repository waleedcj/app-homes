
import consultation from "@/assets/images/svgs/consultation.svg";
import proposal from "@/assets/images/svgs/proposal2.svg";
import execute from "@/assets/images/svgs/execution2.svg";
import Button from "@/components/ui/Button";

interface Step {
	image: string;
	step: string;
	title: string;
	description: string;
}

const steps: Step[] = [
	{
		image: consultation,
		step: "01",
		title: "Consultation",
		description:
			"Schedule a thorough consultation with our landscaping experts to discuss your specific needs, preferences, and budget.",
	},
	{
		image: proposal,
		step: "02",
		title: "Proposal",
		description:
			"We will create a detailed design proposal outlining the recommended landscaping services, materials, and estimated costs.",
	},
	{
		image: execute,
		step: "03",
		title: "Execution",
		description:
			"From site preparation to planting and finishing touches, we'll execute the plan with precision and professionalism",
	},
];

const HowItWorks = () => {
	return (
        <div className="relative bg-primary text-icon-bg mb-8">
        <section className="container mx-auto max-w-7xl  bg-primary text-icon-bg  py-12 px-4 md:px-0">
		
			{/* <div className="mx-auto"> */}
				<div className="text-right mb-10">
					<span className="text-sm tracking-wider">[ HOW IT WORKS ]</span>
				</div>

				<h1 className="text-5xl font-bold font-jakarta text-center text-icon-bg  mb-20 leading-tight">
					<span className="">SIMPLE STEPS FOR </span>
					<br />
					<span className="">OUR </span>
					<span className="bg-gradient-to-r from-green-500 to-[#E8EFEA] inline-block text-transparent bg-clip-text">
						LANDSCAPE
					</span>
					<span className=""> WORK</span>
				</h1>
				{/* Steps Section */}
				<div className="mt-20">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
						{steps.map((step, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								{/* Illustration Container */}
								<div className="w-full aspect-square mb-8 relative overflow-hidden rounded-2xl">
									<img
										src={step.image}
										alt={step.title}
										className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
									/>
									{/* Overlay for consistent look */}
									<div className="absolute inset-0 bg-black/0"></div>
								</div>
								{/* Title */}
								<h3 className="text-xl font-bold font-jakarta mb-4">
									{step.step} | {step.title}
								</h3>

								{/* Description */}
								<p className="leading-relaxed contrast-75  font-normal mb-6">
									{step.description}
								</p>
							</div>
						))}
					</div>

					{/* Appointment Button */}
					<div className="flex justify-center mt-16">
						<Button variant="secondary" size="md" className="w-1/5">
							Get Started
						</Button>
					</div>
				</div>
			{/* </div> */}
		
        </section>
        </div>
	);
};

export default HowItWorks;
