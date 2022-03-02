import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"
import Mint from "../components/Mint"

export default function MintPage(){
    return(
        <>
        <Layout img={'me.jpg'} name={'Admin推特'} href="https://twitter.com/skyone39888636">
            <Head>
                <title>铸造主页</title>
            </Head>
        </Layout>
        <Mint />
        </>
    )
}