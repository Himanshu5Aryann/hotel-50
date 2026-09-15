import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
