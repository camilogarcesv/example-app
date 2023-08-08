import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import Wrapper from '../components/Wrapper/Wrapper';

type LayoutProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export const metadata = {
  title: 'All Countries',
  description: 'Countries World Ranking',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
