import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ConvexClientProvider from "./ConvexClientProvider";
import "./global.css";
export default function RootLayout({
    pageName,
    children,
}: React.PropsWithChildren<{
    pageName: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        <body>
            <ConvexClientProvider>
                <div className="flex flex-col min-h-screen">
                <Header pageName={pageName} />
                <main className="flex-grow">{children}</main>
                <Footer />
                </div>
            </ConvexClientProvider>
      </body>
    </html>
  );
}