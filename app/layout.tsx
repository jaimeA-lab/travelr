import type { Metadata } from "next";
import { Geist_Mono, Kalam } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const kalam = Kalam({
    subsets: ['latin'],
    weight: ['300', '400', '700',]
})

export const metadata: Metadata = {
    title: "DFMTravel",
    description: "Welcome to DFMTravel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${kalam.className} ${geistMono.variable} antialiased`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
