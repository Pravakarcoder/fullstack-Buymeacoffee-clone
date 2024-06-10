import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy me a coffee",
  description: `"Buy Me a Coffee" is a simple, easy-to-use crowdfunding platform that allows creators and entrepreneurs to receive donations and support from their audience. The platform is designed to facilitate small, recurring donations (often in the form of virtual "coffees") as well as one-time contributions, enabling users to sustain their projects and passions with the help of their community.`,
};
<meta name="cryptomus" content="ecd74713" />;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <Header session={session} />
        {children}
      </body>
    </html>
  );
}
