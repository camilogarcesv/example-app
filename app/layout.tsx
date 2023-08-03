import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Wrapper from '../components/Wrapper/Wrapper';

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'All Countries',
  description: 'Countries World Ranking',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
