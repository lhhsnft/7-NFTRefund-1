import Head from "next/head"
import Introduce from "../components/introduce"
import RoadMap from "../components/roadmap"
import Member from "../components/member"
import Honest from "../components/honest"
import Link from "next/link"

export default function Note(){
    return (
        <>
        <Head>
            <title>信息主页</title>
        </Head>
        <Introduce />
        <RoadMap />
        <Member />
        <Honest />
        <Link href='/'>返回主页</Link>
        </>
    )
}
