import { FC } from 'react';
import { Container } from '@mui/material';

import person from '../../assets/icons/person.svg';
import bannerImg from '../../assets/images/headerBg.svg';

import './header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <h1 className="header__heading">
            <span>Five</span> Leaderboard
          </h1>
          <div className="header__banner">
            <div className="banner__content">
              <h2 className="banner__heading">All-time highest scorers</h2>
              <p className="banner__description">
                You can be among the leaders already today
              </p>
              <div className="banner__list">
                <div className="list__item">
                  <img src={person} alt="person" />
                  <span>name - score</span>
                </div>
                <div className="list__item">
                  <img src={person} alt="person" />
                  <span>name - score</span>
                </div>
                <div className="list__item">
                  <img src={person} alt="person" />
                  <span>name - score</span>
                </div>
                <div className="list__item">
                  <img src={person} alt="person" />
                  <span>name - score</span>
                </div>
              </div>
            </div>
            <img
              src={bannerImg}
              alt="Highest scorers"
              className="banner__image"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
