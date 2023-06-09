import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "components/Sidebar";
import Layout from "components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h2>header</h2>
      </Layout>
      {/* <main className="grid grid-cols-12 divide-x-4">
        <div className="col-span-3 p-8">
          <Sidebar />
        </div>
        <div className="col-span-9 p-8">
          <h1 className="text-2xl">Dashboard - Under Development</h1>
        </div>
      </main> */}
    </>
  );
}
