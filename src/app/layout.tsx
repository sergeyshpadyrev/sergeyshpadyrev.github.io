import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Сергей Шпадырев — эссе, заметки, публикации",
  description:
    "Публикации, эссе, заметки, видео и ссылки на каналы Сергея Шпадырева.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${notoSerif.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
