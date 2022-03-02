import styled from "styled-components"
import instyle from '../styles/introduce.module.css'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const MenuWrapper = styled.div`
    display:flex;
    justify-content:space-between;
`

const MenuItemText = styled.span`
    cursor:pointer;
    :hover {
        font-weight:bold;
    }
    border: 1px solid #9E9E9E;
    border-radius:9999px;
`



function MenuItem(props){
    const elementId = props.elementId;
    return(
        <MenuItemText 
            style={{padding: "10px 20px"}}
            onClick={()=>{
                if(elementId){
                    const ele = document.getElementById(elementId);
                    ele.scrollIntoView({behavior:"smooth"})
                }
                props.onClick && props.onClick()
            }}> 
            {props.children}  
        </MenuItemText>
    )
}

function Introduce(){
    return (
        <>
        <div className={instyle.container} id='introduce'>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <MenuWrapper>
                <MenuItem elementId='introduce'> <img src="/logo/protect.png" alt="KissYou" className={instyle.logo} />Introduce</MenuItem>
                <MenuItem elementId='gallery'> <img src="/logo/protection.png" alt="KissYou" className={instyle.logo} /> Gallery</MenuItem>
                <MenuItem elementId='member'> <img src="/logo/rainbow.png" alt="KissYou" className={instyle.logo} /> Member</MenuItem>
                <Link href='/'>
                    <MenuItemText style={{padding: "10px 20px"}}>
                        <img src="/logo/stalker.png" alt="KissYou" className={instyle.logo}/>
                        Go Home
                    </MenuItemText>
                </Link>
            </MenuWrapper>
        </div>
        <div className={instyle.introcontent} >
            <div className={instyle.introduce}>
                <h1>七天无理由退货NFT</h1>
                <h3>Seven days refund NFT without reason</h3>
                <div className={instyle.details} >

                        <p> 🐱‍💻 {' '} 总共1024个 每个售价0.01ETH</p>

                        <p> 🐱‍👓 {' '} 每个NFT在mint出来后的7天内无理由退款</p>


                        <p> 🐱‍🐉 {' '} 所有退款的NFT是打到V神的钱包里 给他老人家留个纪念</p>

                        <p className={instyle.point}> 💕 {' '} 项目的初心是希望NFT都能在某个时间段内有托底 比如people </p>

                        <p className={instyle.strong}> 😘 {' '} 持有NFT的福利是进入妙妙屋 妙妙屋里面什么都没有( •̀ ω •́ )✧✧</p>

                        <p> 🧖‍♀️ {' '} 画师是位青涩漂亮的小姐姐 更新会在推特 路还长 不合成 慢慢画</p>
                        
                        <p> 🐱‍👤 {' '} 不会rug 本人第一个项目 会一直更新 一直做下去的 Never say Never</p>

                        <p> 🐱‍💻 {' '} Number is 1024 Every sold at 0.01ETH</p>

                        <p> 🐱‍👓 {' '} Every NFT minted could refund within 7 days with noreason.</p>

                        <p> 🐱‍🐉 {' '} All NFT refunds are paid to God V's wallet to leave a souvenir for his elderly.</p>

                        <p className={instyle.point}> 💕 {' '} The intention of the project is to hope NFT can have a bottom, such as people. </p>

                        <p className={instyle.strong}> 😘 {' '} The welfare of NFT is to enter Miaomiao House, and there is nothing in Miaomiao( •̀ ω •́ )✧✧</p>

                        <p> 🧖‍♀️ {' '} The painter is a beautiful young lady and the update on twitter draw slowly but never give up</p>

                        <p> 🐱‍👤 {' '} No rug My first project will always be updated and done anyway Never say Never</p> 
                        
                </div>

            </div >
            
        </div>

        </>
    )
}


export default Introduce