import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Foto1 from "../../public/blog/01.png"

export default function Blog(){
    return(
        <>
        <Head>
            <title>Como vamos | M4XLR</title>
        </Head>
        <Navbar></Navbar>
        <h2>
            Generis.init
        </h2>
        <p>
            Hoy inicio con Generis, pese a que me falta mucho por aprender y no estoy tan seguro de como se desenvuelva este proyecto la presion 
            de mis circunstancias me obligan a comenzar el proyecto de inmediato. 
            Mi trabajo nunca va a dejarme en paz, mi padre siempre nos meterá en problemas
            y las distracciones siempre querran apoderarse de mis pensamientos y Valeria nunca dejará de crecer.
        </p>
        <p>
            Hoy me encuentro refugiado en la casa de un gran amigo y mientras contemplo las imperfecciones de mi código, me pregunto si en algun momento
            podremos darle una verdadera forma a LM. El taller corresponde una parte importante de Generis, mas que mi trabajo se ha convertido en una fuente
            de iteraccion directa con artistas y personas muy interesantes, lo cual lo convierte en un nodo de oportunidades para desplegar Generis como una 
            especie de proyecto underground, aunque la verdad no estoy seguro de si ese enfoque sea la mejor estrategia.
        </p>
        <p>
            Volviendo al tema
        </p>
        <p>
            Mi padre solia decirme que lo mas dificil es comenzar y no es para poco, cuando se trata de desarrollo de software o plataformas, tengo entendido que
            elegir adecuadamente tus herramientas y tecnologias puede definir el exito del proyecto. Por ello hoy comenzare por investigar que tecnologias podrian convenirme
            para el desarrollo de Generis.... deseenme suerte. 
        </p>
        <p>
            Termine atorado en un video sobre Elon Musk hablando sobre la educacion y como deberia ser segun su perspectiva, lo pueden encontrar <a href="https://www.youtube.com/watch?v=H1mb3ARvSJo">aqui</a>
        </p>
        <p> 
            Mientras investigaba, me tope con turing y tras completar una funcion simple en JS me invitaron a crear un perfil dentro de la plataforma. Ellos seleccionan a desarrolladores
            para grandes compañias en silicon valley. Algo que me llamo la atencion en esta experiencia fueron los puestos que perfilan para los empleos.
        </p>
        <Image 
        src={Foto1}
        alt="perfiles turing"
        />
        <p>
            como podemos ver, asocian un desarollador fullstack a dos vertientes principales, un lenguaje de programacion + frontend, lo que me lleva a investigar que lenguaje de programacion
            me conviene para Generis. Considerando los principales seleccionados por el mismo sitio se situan en
        </p>
        <ul>
            Node
        </ul>
        <ul>
            Python
        </ul>
        <ul>
            Ruby on rails
        </ul>
        <ul>
            PHP
        </ul>
        <ul>
            Golang
        </ul>
        <ul>
            Java
        </ul>

        <p>
            Con esta lista de lenguajes, creo que puedo comenzar a trabajar en algo. 
        </p>
        <p>I&apos;ll call it a day</p>
        </>
    )
}