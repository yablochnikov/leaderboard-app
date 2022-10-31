import { FC } from 'react';

import './header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__heading">
          <span>Five</span> Leaderboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
