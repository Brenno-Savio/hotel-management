import { NextAuthProvier } from '@/components/AuthProvider/AuthProvider';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import Toast from '@/components/Toast/Toast';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Hotel Manegement App',
  description: 'An app made to improve my abilities in Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>
        <NextAuthProvier>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header />
              <div className="py-32 min-[280px]:py-48 min-[768px]:py-36">
                {children}
              </div>
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvier>
      </body>
    </html>
  );
}
