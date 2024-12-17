import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sport Booking : หน้าหลัก</title>
      </Head>
      <Navbar />
      <div className="container-xxl mt-3">
        <h1>หน้าหลัก</h1>
      </div>
    </div>
  )
}