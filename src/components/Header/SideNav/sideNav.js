import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNav_items'


const SideNavigation = (props) =>{
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#214c79',
                    maxWidth:'220px'
                }}
            >

                <SideNavItems />
            </SideNav>
        </div>
    )
}

export default SideNavigation;
