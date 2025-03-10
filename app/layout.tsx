import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "DFMTravel",
    description: "Generated by create next app",
};

const outfit = Outfit({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.className} antialiased`}
            >
                <NavBar />
                {children}
                <footer>
                    <Footer />
                </footer>
            </body>

        </html>
    );
}
