import bannerImg from '../../assets/images/banner.svg';
import BannerListItem from '../bannerListItem';

import './banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h2 className="banner__heading">All-time highest scorers</h2>
        <p className="banner__description">
          You can be among the leaders already today
        </p>
        <div className="banner__list">
          <BannerListItem />
          <BannerListItem />
          <BannerListItem />
          <BannerListItem />
        </div>
      </div>
      <img src={bannerImg} alt="Highest scorers" className="banner__image" />
    </div>
  );
};

export default Banner;
