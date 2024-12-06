"use client";

import "@/styles/globals.scss";
import { Providers } from "@/components/providers";
import SkipNav from "@/components/layout/header/SkipNav";
import { AuthProvider } from "@/firebase/auth";

// export const metadata = {
//   title: 'next.js template',
//   description: '페이지 설명',
//   openGraph: {
//     title: '페이지 제목',
//     description: '페이지 설명',
//     type: 'website',
//     images: ['http://www.mysite.com/article/article1_featured_image.jpg'],
//     url: 'http://www.mysite.com/article/article1.html',
//   },
//   twitter: {
//     card: 'summary',
//     title: '페이지 제목',
//     description: '페이지 설명',
//     images: ['http://www.mysite.com/article/article1.html'],
//   }
// };

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" 
        />
      </head>
      <body>
        <AuthProvider>
          <Providers>
            <SkipNav />
            <div id="wrap" className="min-h-svh flex flex-col">
              {children}
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
