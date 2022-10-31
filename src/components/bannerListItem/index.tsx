import { FC } from 'react';

import person from '../../assets/icons/person.svg';

import './bannerListItem.scss';

const BannerListItem: FC = () => {
  return (
    <div className="banner__item">
      <img src={person} alt="person" />
      <span>name - score</span>
    </div>
  );
};

export default BannerListItem;
