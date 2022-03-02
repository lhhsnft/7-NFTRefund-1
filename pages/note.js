import Head from "next/head"
import Introduce from "../components/introduce"
import Member from "../components/member"
import Link from "next/link"
import Gallery from "../components/gallery"
import instyle from '../styles/introduce.module.css'

export default function Note(){
    return (
        <>
        <Head>
            <title>信息主页</title>
        </Head>
        <Introduce />
        <Gallery />
        <Member />
        <footer className={instyle.footer}>
            Powered by Family {` `} <img src="/kiss.png" alt="KissYou" height={15} /> 
        </footer>
        </>
    )
}
