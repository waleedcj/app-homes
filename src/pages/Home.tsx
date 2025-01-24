import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";

export const Home = (): FunctionComponent => {
	return (
		<MainLayout>
			<div className="container mx-auto py-12 px-4">
				<section className="text-center mb-16">
					<h1 className="text-5xl font-bold text-green-800 mb-4">
						Transform Your Outdoor Space
					</h1>
					<p className="text-xl text-gray-600 mb-8">
						Professional landscaping services to create your dream garden
					</p>
					<button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
						Get Started
					</button>
				</section>
			</div>
		</MainLayout>
	);
};
