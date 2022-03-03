import Head from 'next/head'
import Link from 'next/link'
import Layout,{siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/index.module.css'



export default function Home() {
  return (
    <>
      <Layout home img={'favicon.png'} name={'七天无理由退货NFT'}>
        <Head>
          <title> {siteTitle} </title>
        </Head>
      </Layout>
      <main className={indexStyles.main}>
        <div className={utilStyles.twoicon}>
        <a href='https://opensea.io/collection/7daynft' target="_blank"> 
            <img style={{marginRight:"80px"}} src="/opensea.svg" /> 
        </a> 

        <a href='https://twitter.com/7DayReFundNFT' target="_blank"> 
            <img src="/twitter.svg" /> 
        </a>
        </div>


        <div className={indexStyles.grid}>

        <Link href="/note">
          <a className={indexStyles.card}>
            <h3>信息 &rarr;&rarr;</h3>
            <p>项目信息 新人必看🐱‍👤</p>
            <p>Must-see For Newcomers.</p>
          </a>
        </Link>

        <Link href="/secretHome">
          <a  className={indexStyles.card}>
            <h3> 小屋&rarr;&rarr;</h3>
            <p>持有NFT才能进入的妙妙屋👣</p>
            <p>Secret Home For Family Member</p>
          </a>
        </Link>


        <Link href="/mint">
        <a  className={indexStyles.card}>
            <h3>铸造 &rarr;&rarr;</h3>
            <p>铸造NFT💕</p>
            <p>Mint NFT Page</p>
          </a>
        </Link>


        <Link href="/refund">
           <a  className={indexStyles.card}>
            <h3>退款 &rarr;&rarr;</h3>
            <p>7天之内均可退款嗷🐱‍💻</p>
            <p>Refund Within 7 Days</p>
          </a>
        </Link>
        </div>
      </main>

      <footer className={indexStyles.footer}>
        <Link href="/">
          <a> Powered by Family{' '} <img src="/kiss.png" alt="KissYou" height={25} /></a>
        </Link>
      </footer>

      {/* <style jsx>{`
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: -100px;
          align-items: center;
        }
      `}</style> */}


    </>
  )
}