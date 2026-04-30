import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '../providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OrderKaro — Fast Local Delivery',
  description: 'Order groceries, food, pharmacy, and more with OrderKaro. Delivered fast to your door.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
