import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"

export default function Mint(){
    return(
        <Layout img={'me.jpg'} name={'Admin信息'} href="https://twitter.com/skyone39888636">
            <Head>
                <title>铸造</title>
            </Head>
        </Layout>
    )
}