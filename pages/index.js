import Head from 'next/head'
import Link from 'next/link'
import Layout,{siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <>
      <Layout home img={'favicon.png'} name={'七天无理由退货NFT'}>
        <Head>
          <title> {siteTitle} </title>
        </Head>
      </Layout>
      <main>
        <div className={utilStyles.twoicon}>
        <a href='https://opensea.io/collection/7daynft' target="_blank"> 
            <img style={{marginRight:"80px"}} src="/opensea.svg" /> 
        </a> 

        <a href='https://twitter.com/7DayReFundNFT' target="_blank"> 
            <img src="/twitter.svg" /> 
        </a>
        </div>


        <div className="grid">

        <Link href="/note">
          <a className="card">
            <h3>信息 &rarr;&rarr;</h3>
            <p>项目信息 新人必看🐱‍👤</p>
            <p>Must-see For Newcomers.</p>
          </a>
        </Link>

        <Link href="/secretHome">
          <a  className="card">
            <h3> 小屋&rarr;&rarr;</h3>
            <p>持有NFT才能进入的妙妙屋👣</p>
            <p>Secret Home For Family Member</p>
          </a>
        </Link>


        <Link href="/mint">
        <a  className="card">
            <h3>铸造 &rarr;&rarr;</h3>
            <p>铸造NFT💕</p>
            <p>Mint NFT Page</p>
          </a>
        </Link>


        <Link href="/refund">
           <a  className="card">
            <h3>退款 &rarr;&rarr;</h3>
            <p>7天之内均可退款嗷🐱‍💻</p>
            <p>Refund Within 7 Days</p>
          </a>
        </Link>


        </div>
      </main>

      
      <footer>
        <Link href="/">
          <a> Powered by Family{' '} <img src="/kiss.png" alt="KissYou" height={25} /></a>
        </Link>
      </footer>

      <style jsx>{`
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: -100px;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 70px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #FD9579;
          border-color: #FF3600;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>


    </>
  )
}