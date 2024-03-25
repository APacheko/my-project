import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Решения для НКО",
  description: "Решаем задачи некоммерческих организаций",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
