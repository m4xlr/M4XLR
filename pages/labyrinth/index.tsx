import Navbar from '../../components/navbar';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Minfooter from '../../components/minfooter';

export default function Labyrinth (){
    return(
        <>
        <Head>
            <title>M4XLR | LABYRINTH</title>
        </Head>
        <Navbar></Navbar>
        <main>
            <p>
                This is labyrinth, a way to undesrtand my art and my vision of the reality, in a good way
                this help me by showing concepts in my thinking and its a good entertainament for the hungry 
                for knoledge.
            </p>
            <p>
                Everytime you enter this page, the scenario is diferent and you have to find links in orther
                to explore
            </p>
        </main>
        <Minfooter></Minfooter>
        </>
    )

}