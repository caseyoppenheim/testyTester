import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import companyLogo from "./logo.png";



const Navbar = () => {
return (
	<>
	<Nav>
        <logo>
            <img src ={companyLogo} width="300"></img>
        </logo>
        <search>
            <input type="text" placeholder="Search..."/>
        </search>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			Support
		</NavLink>
		<NavLink to="/contact" activeStyle>
			My Account
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Stores Near Me
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Cart
		</NavLink>
		</NavMenu>
	</Nav>
    
	</>
);
};

export default Navbar;
