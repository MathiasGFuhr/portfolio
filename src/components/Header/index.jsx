import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Usar useEffect para adicionar/remover a classe "menu-open" no body
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);  // Dependência do menuOpen para que seja executado quando o estado mudar

  return (
    <header>
      <div className="logo">Mathias Fuhr</div>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Ícone do menu hambúrguer */}
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};
