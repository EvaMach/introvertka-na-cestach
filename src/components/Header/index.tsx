import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <nav className="header">
      <ul>
        <li className="text-primary text-4xl font-bold">
          <Link to="/">Domů</Link>
        </li>
        <li>
          <Link to="/cestopisy">Cestopisy</Link>
        </li>
        <li>Gear listy</li>
      </ul>
    </nav>
  );
};

export default Header;
