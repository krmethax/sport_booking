import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
export default function BookingTable() {
    return (
        <div>
            <Head>
                <title>Sport Booking : ตารางการจอง</title>
            </Head>
            <Navbar />
            <div className="container-xxl mt-3">
                <h1>ตารางการจอง</h1>
            </div>
        </div>
    )
}