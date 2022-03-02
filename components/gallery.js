import instyle from '../styles/introduce.module.css'
import styled from "styled-components"

const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 840px;
  max-height: 840px;
  overflow: hidden;
  margin: 1% auto 0 auto;
`;


const GalleryItem = styled.div`
  width: 120px;
  margin: 10px;
  transition: all 0.2s ease;
  will-change: transform;
  position: relative;
  z-index: 10;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 100px;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const arts = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
]


export default function Gallery(){
    return (
        <div className={instyle.gallery} id='gallery' >
            <h1>作品展览</h1>
            <p className={instyle.strong}> 👉{` `} 不接受任何恶意Diss {` `}👈</p>
            <p className={instyle.point}>😘每一幅画都是小姐姐的倾心之作 可以友好交流 一起改进 恶意diss就别说我没有礼貌啦 xxxxx😜</p>
            <p> 👏 总量1024幅 每一幅都是一笔笔画 每一幅在没开图之前都可能回炉重造 感谢小姐姐(✿◡‿◡) </p>
            <div className={instyle.galleryBack}>
            <GalleryList>
                {arts.map((art, idx) => {
                    return (<GalleryItem key={idx}><img src={art} alt="作品展示" /></GalleryItem>);
                })}
            </GalleryList>
            </div>
        </div>
    )
}        