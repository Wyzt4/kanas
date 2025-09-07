// app/layout.js
export const metadata = { title: 'Ancient Trees' };

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head />
      <body>{children}</body>
    </html>
  );
}
