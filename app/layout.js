import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./Providers/NextAuthProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getServerSession } from "next-auth";
import ProgressBarProvider from "./Providers/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nyeloteh",
  description: "Blogging Web Application",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
          <NextAuthProvider session={session}>
            {/* Navbar */}
            <Navbar />

            {/* Main */}
            {children}

            {/* Footer */}
            <Footer />
          </NextAuthProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
