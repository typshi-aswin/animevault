import './globals.css'; // 👈 this brings in all your global styles

export const metadata = {
  title: 'AnimeVault',
  description: 'Anime search and showcase app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
  rel="stylesheet"
/>

      </head>
      <body>{children}</body>
    </html>
  );
}
