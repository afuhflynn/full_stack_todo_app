import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TanstackQueryProvider } from "@/components/providers/query-provider";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo app | A full stack nextjs todo app.",
  description: "A full stack nextjs todo app with advance nextjs 16 features.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefinSans.variable} ${josefinSans.className} antialiased`}
      >
        <Toaster className="bg-background" theme="dark" richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
