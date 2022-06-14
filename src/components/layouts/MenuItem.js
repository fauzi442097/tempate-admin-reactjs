import { Link } from 'react-router-dom'

const MenuItem = (props) => {
   return (
      <li>
         <Link to={props.url} className={props.class}>{props.name}</Link>
         {props.children}
      </li>
   )
}

export default MenuItem