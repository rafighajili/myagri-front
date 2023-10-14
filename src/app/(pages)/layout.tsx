import { ChildrenProp } from "#/lib";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function PagesLayout({ children }: ChildrenProp) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex-1 py-8">{children}</div>
      <Footer />
    </div>
  );
}
