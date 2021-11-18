import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Minfooter from "../components/minfooter";

export default function About (){
    return(
        <>
        <Head>
            <title>Who I am ∑ M4XLR</title>
        </Head>
        <Navbar></Navbar>
        A Little Bio
        <Minfooter></Minfooter>
        </>
    )
}
