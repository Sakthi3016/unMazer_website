import React from 'react';
import Finalcards from '../Cards/Finalcards';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/Appfinal' activeStyle>
			THOUGHTS
		</NavLink>
		<NavLink to='/events' activeStyle>
			INDUSTRY APPLICATION
		</NavLink>
		<NavLink to='/annual' activeStyle>
			ALTERNATIVE DATA
		</NavLink>
		<NavLink to='/team' activeStyle>
			LIFE AT UNMAZER
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			DEMO
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
    
    <Finalcards/>
	</>
);
};

export default Navbar;
