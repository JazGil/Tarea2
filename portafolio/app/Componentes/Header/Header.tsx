import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

let HeaderData: string = 'Jazmin Gil De Gaona';

export default function Header(){ 
  return (
    <header className={styles.header} id="header">
      <nav className={`container ${styles.nav}`}>
        
        <Link href="#home" className="nav__logo">
          <span className="logo__bracket">&lt;</span>
          {HeaderData}
          <span className="logo__bracket">/&gt;</span>
        </Link>

        <input type="checkbox" id="nav-toggle" className="nav__checkbox" />

        <label htmlFor="nav-toggle" className="nav__toggle">
          <i className="fas fa-bars"></i>
        </label>

        <div className="nav__menu" id="nav-menu">
          <label htmlFor="nav-toggle" className="nav__close">
            <i className="fas fa-times"></i>
          </label>

          <ul className="nav__list">
            <li className="nav__item">
              <Link href="#home" className="nav__link">Inicio</Link>
            </li>
            <li className="nav__item">
              <Link href="#interests" className="nav__link">Intereses</Link>
            </li>
            <li className="nav__item">
              <Link href="#cv" className="nav__link">CV</Link>
            </li>
            <li className="nav__item">
              <Link href="#projects" className="nav__link">Proyectos</Link>
            </li>
            <li className="nav__item">
              <Link href="#contact" className="nav__link">Contacto</Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}