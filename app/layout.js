import { Roboto, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Especifica los pesos que necesitas
  variable: "--font-roboto",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${sourceCodePro.variable} antialiased min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x`}
      >
        {children}
      </body>
    </html>
  );
}