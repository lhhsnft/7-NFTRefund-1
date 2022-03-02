import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"
import Refund from "../components/Refund"
import instyle from '../styles/introduce.module.css'


export default function RefundPage(){
    return(
        <>
        <Layout img={'me.jpg'} name={'Admin推特'} href="https://twitter.com/skyone39888636">
            <Head>
                <title>退款主页</title>
            </Head>
        </Layout>
        <Refund />
        <footer className={instyle.footer}>
            Powered by Family {` `} <img src="/kiss.png" alt="KissYou" height={15} /> 
        </footer>
        </>
    )
}