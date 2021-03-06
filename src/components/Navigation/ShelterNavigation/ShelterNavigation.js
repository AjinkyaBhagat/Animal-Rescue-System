import React from "react";
import '../Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const ShelterNavigation = ({ setIsShelter }) => {
    const handleLogout = () => {
        window.localStorage.clear();
        setIsShelter(window.localStorage.getItem('shelter'))
        window.location.reload();
    }
    return (
        <div>
            <Navbar className="color-nav" collapseOnSelect expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand as={NavLink} to={"/"}>Shelter Nav⚡</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>

                            <Link to={"/shelter"} className="navlink">Shelter Profile</Link>
                            <Link to={"/listpet"} className="navlink">List Pet</Link>
                            <Link to={"/shelter/thingstable"} className="navlink" >Things We Need</Link>
                            <Link to={"/shelter/adoptionlisting"} className="navlink">View Adoption Listing</Link>
                            <Link to={"/listsupplies"} className="navlink">List Supplies</Link>
                            <Link to={"/shelter/viewrescuerequest"} className="navlink">View Rescue Request</Link>
                            <Link to={"/shelter/viewacceptedrequest"} className="navlink">View Accepted Request</Link>
                            <Link to={"/"} className="navlink" onClick={handleLogout}>Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );

}

export default ShelterNavigation;










// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from "react-router-dom";

// function ShelterNavigation(setIsShelter) {

//     const handleLogout = () => {
//         setIsShelter(false)
//         window.location.reload();
//     }

//     return (
//         <>

//             <Link to={"/shelter"} className="navlink">Shelter Profile</Link>
//             <Link to={"/listpet"} className="navlink">List Pet</Link>
//             <Link to={"/listsupplies"} className="navlink">List Supplies</Link>
//             <Link to={"/viewrescuerequest"} className="navlink">View Rescue Request</Link>
//             <Link to={"/"} className="navlink" onClick={handleLogout}>Logout</Link>

//         </>
//     )
// }

// export default ShelterNavigation;