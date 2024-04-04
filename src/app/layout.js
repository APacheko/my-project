import { Inter } from "next/font/google";
import Header from "@/componet/Header/Header";
import Footer from "@/componet/Footer/Footer";
import { Suspense } from "react";
import { Metrika } from "@/componet/Metrika/Metrika";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Решения для НКО. Помощь в получении гранта",
  description:
    "Услуги для некоммерческих организаций. Подготовка заявки на грант. Бухгалерские соправождение, подготовка отчетности для НКО. Юридическая поддерджка НКО",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta name="yandex-verification" content="fbf0cdafa213fcd0" />
      <meta
        property="og:type" content="website"
      />
       <meta
        property="og:url" content="https://orggrant.ru/"
      />
       <meta
        property="og:url" content="https://orggrant.ru/"
      />
       <meta
        property="og:image" content="../../public/logo__footer.svg"
      />
      <meta
        property="og:title"
        content="Решения для НКО. Помощь в получении гранта"
      />
      <meta
        property="og:description"
        content="Услуги для некоммерческих организаций"
      />
      <body className="root">
        <Suspense>
          <Metrika />
        </Suspense>
        <div className="page">
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
