import "./navbar.css";
import CartWidget from '../CartWidgets/CartWidget';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    return(
            
            <nav className="navbar">

                <div className="logNav">
                    <Link to="/">Logo</Link>
                </div>

                <div className="navbarLinks">   
                    <ul className="categorias">
                        <li>
                        <Link to="/category/Apple">Apple</Link>
                        </li>

                        <li>
                        <Link to="/category/Samsung">Samsung</Link>                        
                        </li>

                        <li>
                        <Link to="/category/Xiaomi">Xiaomi</Link>                       
                         </li>

                        <li>
                            <Link to="/category/Motorola">Motorola</Link>
                        </li>

                    </ul>
                    
                    
                    

                </div>
            
                
                    <CartWidget/>
                
            
            </nav>
        
        
    )
}

export default Navbar;