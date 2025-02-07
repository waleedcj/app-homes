import Icons from "@/assets/images/svgs/svgComponent";
import Button from "@/components/ui/Button";

const Values = () => {
	return (
		<section className="container mx-auto max-w-7xl  mb-8 py-16 px-4 md:px-0">
			{/* Header Navigation */}
			<nav className="mb-10">
				<div className="text-primary">[ VALUES ]</div>
			</nav>

			{/* Main Title */}
			<h1 className="text-5xl font-bold font-jakarta text-primary text-center mb-20 leading-tight">
				<span className="">WE ARE </span>
				<span className="bg-gradient-to-r from-green-500 to-[#374836] inline-block text-transparent bg-clip-text">
					DIFFERENT
				</span>
				<br />
				<span className="">IN EVERY WAYS</span>
			</h1>

			{/* Main Content */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Left Column */}
				<div className="space-y-8">
					<img
						src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
						alt="Garden workspace"
						className="w-full h-[500px] object-cover rounded-lg"
					/>
				</div>

				{/* Right Column */}
				<div className="flex flex-col h-full">
					{/* Button for mobile view */}
					{/* <button className="bg-[#2F3A2F] text-white px-8 py-3 rounded w-full mb-8 lg:hidden">
						Get Started
					</button> */}
					<Button variant="primary" size="md" className="w-full mb-8 lg:hidden">
						Get Started
					</Button>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Feature 1 */}
						<div className="space-y-4">
							<div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center">
								<Icons tech="Heart" className="h-5 w-5" />
							</div>
							<h3 className="font-jakarta text-xl font-bold text-primary">
								Passion in every work
							</h3>
							<p className="text-primary">
								We are deeply passionate about creating beautiful, sustainable
								green landscapes for our clients.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="space-y-4">
							<div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center">
								<Icons tech="Link" className="h-5 w-5" />
							</div>
							<h3 className="font-jakarta text-xl font-bold text-primary">
								Collaboration on top
							</h3>
							<p className="text-primary">
								We make your dream design come true by combining your ideas with
								our 10+ years of garden design expertise.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="space-y-4">
							<div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center">
								<Icons tech="Tree" className="h-5 w-5" />
							</div>
							<h3 className="font-jakarta text-xl font-bold text-primary">
								Sustainability in check
							</h3>
							<p className="text-primary">
								We love nurturing nature, one garden at a time, so that you can
								enjoy the beautiful landscape of our garden even longer.
							</p>
						</div>

						{/* Feature 4 */}
						<div className="space-y-4">
							<div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center">
								<Icons tech="Lightning" className="h-5 w-5" />
							</div>
							<h3 className="font-jakarta text-xl font-bold text-primary">
								Creativity unleashed
							</h3>
							<p className="text-primary">
								We make sure to only give you our innovative designs that stand
								out to make sure that your garden is not like the others.
							</p>
						</div>
					</div>

					{/* Button for desktop view */}
					<Button
						variant="primary"
						size="md"
						className="w-full mt-auto hidden lg:block"
					>
						Get Started
					</Button>

					{/* <button className="bg-[#2F3A2F] text-white px-8 py-3 rounded w-full mt-auto hidden lg:block">
						Get Started
					</button> */}
				</div>
			</div>
		</section>
	);
};

export default Values;
