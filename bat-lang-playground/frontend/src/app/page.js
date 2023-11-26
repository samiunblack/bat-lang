"use client"

import Head from "next/head";

import Code from "./components/Code";
import Header from "./components/Header";
import Terminal from "./components/Code/Terminal";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";

export default function Docs() {
  return (
    <div className="mx-4 sm:mx-16">
      <Head>
        <title>Bhailang - A toy programming language based on an inside joke</title>
        <meta property="og:title" content="Bat Lang: The Dark Language Rises" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="" key="url" />
        <meta property="og:description" content="Bat Lang is batman inspired dynamic programming language written in Python. Created by Samiun Black" key="description" />
        <meta name="description" content="Bat Lang is batman inspired dynamic programming language written in Python. Created by Samiun Black" />
        <meta property="og:site_name" content="bat Lang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}
