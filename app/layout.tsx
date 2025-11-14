import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appiq - Telefon Mağazası | İzmir Buca",
  description: "İzmir Buca'da telefon satışı, alımı ve tamiri. Appiq ile en iyi hizmet.",
  keywords: "telefon, telefon tamiri, telefon satışı, İzmir, Buca, Appiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

