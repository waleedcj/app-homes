import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";

export const About = (): FunctionComponent => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience, GreenScape has been transforming outdoor spaces
              into beautiful, functional environments that our clients love.
            </p>
            <p className="text-gray-600">
              Our team of certified landscapers brings expertise and passion to every project,
              ensuring the highest quality results.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg">
            {/* Placeholder for image */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}; 