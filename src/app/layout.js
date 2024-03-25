import { Inter } from "next/font/google";
import Header from "@/componet/Header/Header";
import Footer from "@/componet/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Решения для НКО",
  description: "Решаем задачи некоммерческих организаций",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="root">
        <div className="page">
          <Header />
          <main className="content">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
