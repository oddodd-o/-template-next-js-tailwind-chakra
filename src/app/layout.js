"use client";

import "@/styles/globals.scss";
import { Providers } from "@/components/providers";
import SkipNav from "@/components/layout/header/SkipNav";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <SkipNav />
          <div id="wrap" className="min-h-svh flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
