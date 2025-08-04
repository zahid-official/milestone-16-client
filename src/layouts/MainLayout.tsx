import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <nav>
        <Navbar></Navbar>
      </nav>

      {/* outlet */}
      <main className="min-h-[59vh] mt-22">
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
