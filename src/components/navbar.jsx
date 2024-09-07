// Navbar.js
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header className="p-4 flex justify-between items-center font-inter">
            {/* Логотип */}
            <div className="flex items-center space-x-4">
                <h1 className="font-bold text-4xl tracking-tight mt-7 ml-12">
                    GAVRIKI
                </h1>
            </div>

            <nav className=" space-x-10 mt-7 mr-12">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-inter text-2xl  ${isActive ? 'underline font-medium' : ' hover:text-black'}`
                    }
                >
                    личный кабинет
                </NavLink>
                <NavLink
                    to="/templates"
                    className={({ isActive }) =>
                        `font-inter text-2xl  ${isActive ? 'underline font-medium' : ' hover:text-black'}`
                    }
                >
                    шаблоны
                </NavLink>
                <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                        `font-inter text-2xl  ${isActive ? 'underline font-medium' : ' hover:text-black'}`
                    }
                >
                    тарифы
                </NavLink>
            </nav>
        </header>
    );
}

export default Navbar;
