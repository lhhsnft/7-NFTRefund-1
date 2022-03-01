import Head from "next/head"
import Introduce from "../components/introduce"

export default function Note(){
    return (
        <>
        <Head>
            <title>信息主页</title>
        </Head>
        <Introduce />
        </>
    )
}