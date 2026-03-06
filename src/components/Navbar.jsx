import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-brand">
                    <h1>🍖 Bade Sahab Ka Dhaba</h1>
                </div>
                <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>  
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}