import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { site } from "@/lib/site";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A2342",
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Fontanero y sanitario en Montevideo`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://sanitarioraularrieta.com"),
  openGraph: {
    title: site.name,
    description: site.tagline,
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${script.variable} h-full`}>
      <body className="mobile-cta-spacer min-h-full flex flex-col bg-white font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
