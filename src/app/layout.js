import { Inter } from "next/font/google";
import Tabs from "../../components/tabs/tabComponent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8 mx-auto p-2">
        <Tabs />
        <div className={inter.className}>{children}</div>
      </div>
    </div>
  );
}
