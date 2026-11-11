import '../styles/ds/styles.css';
import '../styles/site.css';

export const metadata = {
  title: 'Kariyar · A private safety companion for women and girls',
  description: 'Kariyar is a free, private safety companion for women and girls in Nigeria. Talk to a trained responder, find help nearby, or dial *384*77# from any phone.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
