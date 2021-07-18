
import  React, {useState} from "react";

const Menu = () => {

    const [menuActive, menuToggled] = useState(false);

    const toggleMenu = (e) =>{
        e.preventDefault();
        e.target.classList.toggle("active");
        let layout = document.getElementById("layout");
        menuToggled(!menuActive);  
        layout.classList.toggle("active");      
        console.log(process.env.REACT_APP_LOGIN)
    };

    return (
        <>
        <a href="#menu" onClick={toggleMenu} className="menu-link" alt="open menu"><span>Menu</span></a>
        <section id="menu">
        <div className="header">
            <h1 className="menu-heading">Menu</h1>
        </div>
        <div className="content">
            <ul>
            <li><a href='#login' style={{display: 'none'}}>Logs In</a></li> 
           </ul>
        </div>
    </section>
    </>
    );
  }
  
  export default Menu;
  