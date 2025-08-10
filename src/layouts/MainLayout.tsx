import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="sticky py-2 top-0 z-50 w-full border-b border-white/10 dark:bg-black backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-black shadow-sm shadow-black/5">
        <Navbar></Navbar>
      </nav>

      {/* outlet */}
      <main className="min-h-[50vh]">
        <Outlet></Outlet>
      </main>

      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
