import styles from "../styles/layout.module.css"
import Head from "next/head"
import Image from "next/image"
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'


export const siteTitle = "7天无理由退货NFT"




export default function Layout({children,home,img,name,href,icon}){
    return(
        <div className={styles.container} >
            <Head>
                <link rel="icon" href="/profile.png" />
                <meta name='description' content='7 Day Refund with No Reason' />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <header className={styles.header} >
                {home ? (
                    <>
                     <Image 
                        priority
                        src={`/${img}`}
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2X1}>
                        <img className={utilStyles.love} src='/love.png'  height={40} width={40}/>{name}
                    </h1>
                    </>
                ):(
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src={`/${img}`}
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.borderCircle}>
                            <Link href={href} >
                                <a target='_blank' className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>⬅ 返回主页</a>
                    </Link>

                </div>
                
            )}

        </div>
    )
}