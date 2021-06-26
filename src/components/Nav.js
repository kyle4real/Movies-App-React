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
            <div className={"nav container"}>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search__bar"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </div>
        </header>
    );
};

export default Nav;
