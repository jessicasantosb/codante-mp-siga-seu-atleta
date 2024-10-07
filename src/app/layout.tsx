import type { Metadata } from 'next';
import { Darker_Grotesque } from 'next/font/google';
import './globals.css';

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siga Seu Atleta',
  description:
    'Veja a lista dos atletas paralímpicos e olímpicos do Brasil e suas contas do Instagram, filtrando por modalidades.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={darkerGrotesque.className}>{children}</body>
    </html>
  );
}
