"use client";

import Main from "@/components/layout/Main";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import Home from "./home/home";

export default function Page() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
}
