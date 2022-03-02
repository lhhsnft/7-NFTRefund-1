
import instyle from '../styles/introduce.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Member(){
    return (
        <div className={instyle.member} id='member' >
                <Image 
                        priority
                        src='/me.jpg'
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt='Admin'
                />
                <br/>
                <div>
                <a href='https://twitter.com/skyone39888636' target="_blank"> 
                    <img style={{marginRight:'80px'}} src="/twitter.svg" /> 
                </a>
                <a href='https://github.com/s1119858711' target="_blank"> 
                    <img src="/github.svg"  height={40} /> 
                </a>
                </div>
                
                <p>Here {` `} 伙计 你好啊🤞</p>
                <p> ❌ 先进行一下隆重的自我介绍  我叫xxx 来自xxx 芳龄xxx 性别xxx <span>年轻是真年轻</span>  🐱‍👤</p>
                <p> 👏 2020年4月入的圈 位面之子 很幸运没赶上312 一直合约赌狗玩了一年 后注意力迁移到生态 </p>
                <p> 🧇 时间很充沛 没有什么任务 每天的主流是敲代码和看项目</p>
                <div className={instyle.line}></div>  
                <p> 💕 这个项目的初心及发展我在这个<a href='https://twitter.com/7DayReFundNFT/status/1497793690340786179' target='_blank' >推特</a>这里有说过 麻烦动动小手点一点 👀</p>
                <p> <strong> 🤩 <Link href='/secretHome'>妙妙屋</Link>里面会添加一些复盘 笔记  书记 视频之类的学习资料 拾人牙慧 辛苦整理 <span>没有alpha 也没有beta</span> </strong> </p>
                <p> 🤓 学习资料是我一人来做 没有想做知识堡垒 也不求知识扩散 <span>主流是整理 辅助是思考</span></p>
                <p> 😎 不会组建社区 也没有DAO组织 添加的学习资料会涉及到专业知识方面的内容多一些 比如 <span>数学 计算机 加密 金融</span></p>
                <p> 🥞 由衷希望各位明白 <span>NFT是可以有托底措施的</span>  全在项目方 本项目就是一个很好的demo</p>
                <p> 🍕  如果说你的投资是以年为单位 不妨试试Mint一个 放到冷钱包 <span>搏我N年后能不能成大器</span></p>
                <p> 🍨 <span>不当镰刀 不昧良心</span> 支持七天无理由退款是真的 合约里的钱我很难提出来 不喜欢 请放过 不要DISS </p>
        </div>
    )
}           