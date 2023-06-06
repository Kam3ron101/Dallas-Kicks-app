import {Link} from "react-router-dom"
export default function Navbar(){
    

return ( 
<nav className="nav">

<Link to="/" className="site-title">Dallas Kicks</Link>

<ul>
<CustomLink to = "/Signup">Sign Up</CustomLink>
<CustomLink to = "/Shoes">Shoes</CustomLink>
<CustomLink to = "/Contact">Contact</CustomLink>
    
</ul>

</nav>


    )

}


function CustomLink({to, children, ...props}){
    const path = window.location.pathname

return(
<li className={path === to ?  "active": ""}>
 <Link to={to}{...props}>{children}</Link></li>
)

}