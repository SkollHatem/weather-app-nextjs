import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description:
    "Weather App - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero deleniti sint quod obcaecati minus corporis adipisci facere exercitationem consequuntur, autem quaerat incidunt voluptatum officia, nobis doloremque, amet aperiam dolor voluptatibus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
