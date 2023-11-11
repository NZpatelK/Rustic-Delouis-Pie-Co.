import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'

const isTablet = (): boolean => {
    const tabletWidth = 600;
    return window.innerWidth >= tabletWidth;
};

function NavBar() {
    const [isTabletDevice, setIsTabletDevice] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletDevice(isTablet());
        };

        handleResize();
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div className="navBar">
            <div className="navBarTitle">Rustic Delouis Pie Co.</div>
            {!isTabletDevice ? (
                // ---------------------------------------------------------------//
                // This is the hamburger menu for mobile and tablet devices
                <div className='mobileNavBar'>
                    <button
                        className={(isNavOpen ? "is-active" : "") + " hamburger"}
                        onClick={handleNavOpen}
                    >
                        <div className="bar"></div>
                    </button>
                    <nav className={(isNavOpen ? "is-active" : "") + " mobile-nav"}>
                        <Link to="/" className="linkName">
                            Home
                        </Link>
                        <Link className="linkName" to="/pieProducts">
                            Products
                        </Link>
                        <Link className="linkName" to="/cart">
                            Cart
                        </Link>
                    </nav>
                </div>
            ) : (
                // ---------------------------------------------------------------//
                // This is the nav bar for desktop and Laptop devices
                <nav className="navBarLinks">
                    <Link to="/" className="linkName">
                        Home
                    </Link>
                    <Link className="linkName" to="/pieProducts">
                        Products
                    </Link>
                    <Link className="linkName" to="/cart">
                        Cart
                    </Link>
                </nav>
                // ---------------------------------------------------------------//
            )}

        </div>
    );
}

export default NavBar
