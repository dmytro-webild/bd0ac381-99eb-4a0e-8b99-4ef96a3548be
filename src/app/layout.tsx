import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Restoran Ayam Lezat - Ayam Panggang Terbaik di Kota',
  description: 'Nikmati kelezatan ayam panggang dan hidangan ayam spesial lainnya di Restoran Ayam Lezat. Resep otentik, bahan segar, dan suasana nyaman untuk pengalaman bersantap tak terlupakan.',
  keywords: ["restoran ayam, ayam panggang, ayam bakar, ayam geprek, menu ayam, makanan enak, kuliner ayam"],
  openGraph: {
    "title": "Restoran Ayam Lezat - Ayam Panggang Terbaik di Kota",
    "description": "Nikmati kelezatan ayam panggang dan hidangan ayam spesial lainnya di Restoran Ayam Lezat.",
    "url": "https://www.restoranayamlezat.com",
    "siteName": "Restoran Ayam Lezat",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/baked-chicken-with-baby-potatoes-salad-green-background_127032-3474.jpg",
        "alt": "Ayam Panggang Sempurna"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Restoran Ayam Lezat - Ayam Panggang Terbaik di Kota",
    "description": "Nikmati kelezatan ayam panggang dan hidangan ayam spesial lainnya di Restoran Ayam Lezat.",
    "images": [
      "http://img.b2bpic.net/free-photo/baked-chicken-with-baby-potatoes-salad-green-background_127032-3474.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
