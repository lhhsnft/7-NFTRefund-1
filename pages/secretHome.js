import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"
import instyle from '../styles/introduce.module.css'


export default function secretHome(){
    return(
        <>
        <Layout img={'me.jpg'} name={'Admin推特'} href="https://twitter.com/skyone39888636">
            <Head>
                <title>妙妙屋</title>
            </Head>
        </Layout>
        <p className={instyle.member}>这里以后做成博客  {`  `} 👣<span>持有NFT才能看到哦</span>👣 (❁´◡`❁)</p>
        <p className={instyle.member}>还木有写东西 内容主攻一些专业性的知识 静待发展[]~(￣▽￣)~*</p>
        <footer className={instyle.footer}>
            Powered by Family {` `} <img src="/kiss.png" alt="KissYou" height={15} /> 
        </footer>
        </>
    )
}