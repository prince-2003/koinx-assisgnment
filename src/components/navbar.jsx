import { useState } from 'react';
import logo from '../assets/Logo.svg';
import Button from './button';
import { GiHamburgerMenu } from 'react-icons/gi';

const navItems = [
    { name: 'Crypto Taxes', path: '/' },
    { name: 'Free Tools', path: '/' },
    { name: 'Resource Center', path: '/' },
];

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => setShowMenu(!showMenu);

    return (
        <div className='sticky top-0 z-50'>
        <nav className="flex justify-between items-center px-4 md:px-16 bg-white text-black py-4 relative">
            <img src={logo} alt="logo" className="h-8 md:h-10" />

  
            <GiHamburgerMenu
                className="text-2xl cursor-pointer md:hidden"
                onClick={handleMenuClick}
            />

            <ul
                className={`absolute top-16 right-0 bg-white border p-4 flex flex-col gap-4 shadow-lg transition-transform duration-300 ${
                    showMenu ? 'block' : 'hidden'
                } md:hidden`}
            >
                {navItems.map((item, index) => (
                    <li key={index} className="font-semibold text-lg">
                        {item.name}
                    </li>
                ))}
                
            </ul>
            <ul className="hidden md:flex gap-8 font-semibold text-lg items-center">
                {navItems.map((item, index) => (
                    <li key={index}>
                        {item.name}
                    </li>
                ))}
                <li>
                    <Button text="Get Started" className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white"/>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;
