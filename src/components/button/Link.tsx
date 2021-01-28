
interface LinkProps {
  link:string
  icon:string
}

const Link:React.FC<LinkProps> = ({link,icon})=>{
  return (
    <a target="_blank" href={link}>
      <img src={icon} style={{height:'24px',width:'24px',margin:'12px'}}/>
    </a>
  )
}

export default Link