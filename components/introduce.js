import styled from "styled-components"
import instyle from '../styles/introduce.module.css'
import RoadMap from "./roadmap"
import Member from "./member"
import Honest from "./honest"
import Link from "next/link"

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${'1024px'}) {
    flex-direction: column;
  }
`;

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
            <MenuWrapper>
                <MenuItem elementId='introduce'> <img src="/logo/protect.png" alt="KissYou" className={instyle.logo} /> introduce</MenuItem>
                <MenuItem elementId='roadmap'> <img src="/logo/protection.png" alt="KissYou" className={instyle.logo} />Roadmap</MenuItem>
                <MenuItem elementId='member'> <img src="/logo/rainbow.png" alt="KissYou" className={instyle.logo} /> Member</MenuItem>
                <MenuItem elementId='honest'> <img src="/logo/stalker.png" alt="KissYou" className={instyle.logo} /> Honest</MenuItem>
            </MenuWrapper>
        </div>
        <RoadMap />
        <Member />
        <Honest />
        <Link href='/'>返回主页</Link>
        </>
    )
}


export default Introduce