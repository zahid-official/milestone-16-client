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
      <main>
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
