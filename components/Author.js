import {Avatar,Divider} from 'antd'
import '../static/style/components/Author.css'

const Author =()=>{
 return (
    <div className='author-div comm-box'>
         <div> <Avatar size={100} src='https://github.githubassets.com/images/modules/octocats/supportcat.jpg'/>  </div>
         <div className='author-introduction'>
             react nextjs 学习,react nextjs 学习,react nextjs 学习,react nextjs 学习,
             <Divider>社交账号</Divider>
             <Avatar size={28} icon="github" className="account" />
             <Avatar size={28} icon="qq" className="account" />
             <Avatar size={28} icon="wechat" className="account" />
         </div>
    </div>      
  
 )
}
export default Author