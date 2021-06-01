import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
class NavBar extends Component {

render() {
    return (
        <Navbar id="topnav" fixed="top" collapseOnSelect expand="lg" bg={this.props.bg} variant={this.props.variant}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#resume">Experience</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    //     <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav mr-auto">
    //             <li class="nav-item active">
    //                 <a class="nav-link" href="#home">Home<span class="sr-only">(current)</span></a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#about">About</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#projects">Projects</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#skills">Skills</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#experience">Experience</a>
    //             </li>
    //         </ul>
    //     </div>
    //   </nav>
        )
    }
}
export default NavBar;
