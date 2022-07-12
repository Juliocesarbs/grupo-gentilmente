import React, { Component } from "react";
import { MenuItems } from "./elements/MenuItems";
import "./topbar.css";
import Button from "../topbar/elements/Button";
import imgLogo from "../../assets/logoTopbar.png";
class Topbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
    render(){
        return(
            <nav className="TopbarItems">
                <h1 className="topbar-logo"><img src={imgLogo} className="logo" alt="" /></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                        {item.title}
                                </a>
                            </li>
                        )
                    })}  
                </ul>
                <Button>Entrar</Button>
            </nav>
        )
    }
}
export default Topbar;