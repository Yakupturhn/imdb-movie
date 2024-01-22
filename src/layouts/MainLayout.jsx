import { Toaster } from "@/components/ui/sonner";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
    <Toaster closeButton richColors />
  </div>
);

export default MainLayout;
