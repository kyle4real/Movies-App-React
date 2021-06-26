import { useState, useEffect } from "react";

const Nav = ({ handleOnSubmit, handleOnChange, searchTerm }) => {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const handleNav = () => {
            if (window.scrollY >= 64) {
                setNav(true);
            } else {
                setNav(false);
            }
        };
        window.addEventListener("scroll", handleNav);
    }, []);

    return (
        <header className={nav ? "header setNav" : "header"}>
            <div className="nav container">
                <a className="nav__logo" href="/">
                    movie<span className="nav__logo--span">HUB</span>
                </a>
                <form className="nav__form" onSubmit={handleOnSubmit}>
                    <input
                        className="nav__form--search"
                        type="search"
                        placeholder="search"
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                    <i className="fas fa-search" onClick={handleOnSubmit}></i>
                </form>
            </div>
        </header>
    );
};

export default Nav;
