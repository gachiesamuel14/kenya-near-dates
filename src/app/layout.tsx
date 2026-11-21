import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenya Near Dates - Location-Based Matchmaking",
  description: "Connect with nearby people in Kenya. Location-based dating for Nairobi, Mombasa, Kisumu and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-kenyan-green">
            Kenya Near Dates
          </a>
          <div className="space-x-4">
            <a href="/discover" className="text-gray-700 hover:text-kenyan-green">Discover</a>
            <a href="/matches" className="text-gray-700 hover:text-kenyan-green">Matches</a>
            <a href="/profile" className="text-gray-700 hover:text-kenyan-green">Profile</a>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="text-center p-4 text-gray-500 text-sm">
          Made for Kenyans • Location-based matchmaking
        </footer>
      </body>
    </html>
  );
}