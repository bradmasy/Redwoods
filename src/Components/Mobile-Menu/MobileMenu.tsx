import { useEffect } from 'react';
import './styles.css'

interface MenuItem {
    url: string;
    caption: string;
}

interface MobileMenuProps {
    menuItems: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems }) => {


    return <>
        <div className="rw-mobile-menu">
            <div className="rw-mobile-menu__menu-item-container"> {menuItems.map((menuItem, index) => (
                <div className="rw-mobile-menu__menu-option" key={`${menuItem}-${index}`} >
                    <a href={menuItem.url}>{menuItem.caption}</a>
                </div>
            ))}</div>

        </div>
    </>
}