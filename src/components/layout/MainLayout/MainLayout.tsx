import type { FunctionComponent } from "@/common/types";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps): FunctionComponent => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 