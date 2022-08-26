import { useState } from 'react';
import 'animate.css';

export default function NavBar(){
    const [showMenu, setShowMenu] = useState(false)

    const clickHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <section className='animate__animated animate__fadeInDown'>
            <nav className="row-nav">
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className="desktop-menu">
                    <ul>
                        <li>Product</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li className='period'>•</li>
                        <li className='login'>Login</li>
                    </ul>
                </div>
                <div onClick={clickHandler} className="menu-mobile">
                    {showMenu ? <img src="/images/icon-close.svg" alt="" /> : <img src="/images/icon-hamburger.svg" alt="" /> }
                </div>
            </nav>
            {showMenu && 
            <div className='menu'>
                <ul>
                    <li>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <hr />
                    <li className='login'>Login</li>
                </ul>
            </div>
            }
        </section>
    )
} 