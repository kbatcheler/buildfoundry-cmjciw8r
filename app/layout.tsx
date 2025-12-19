import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatbot Web App',
  description: 'A modern chatbot interface with FAQ and contact form.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>        
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="min-h-screen p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}