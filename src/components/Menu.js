
import React from "react";

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuActive: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);

    };

    toggleMenu(event){
        event.preventDefault();

        this.setState({ menuActive: !this.state.menuActive });  
        const layout = document.getElementById("layout");
        !this.state.menuActive ? layout.classList.add("active") : layout.classList.remove("active") ;
        
    };
 render() {
    return (
        <>
        <a href="#menu" onClick={this.toggleMenu} className="menu-link" alt="open menu"><span>Menu</span></a>
        <section id="menu">
        <div className="header">
            <h1>Menu</h1>
        </div>
        <div className="content">
           <ul>
               <li><a href={'#login'}>Log In</a></li>
           </ul>
        </div>
    </section>
    </>
    )}
  }
  
  export default Menu;
  