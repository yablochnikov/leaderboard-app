import edit from '../../assets/icons/edit.svg';
import person from '../../assets/icons/person.svg';
import CustomButton from '../customButton';

import './boardListItem.scss';

const BoardListItem = () => {
  return (
    <li className="board__item">
      <div className="board__info">
        <span className="board__place">1rd</span>
        <img className="board__avatar" src={person} alt="avatar" />
        <span className="board__score">12</span>
        <span className="board__name">Petr</span>
      </div>
      <div className="board__stats">
        <span>6 places</span>
        <CustomButton variant="text" text={<img src={edit} alt="edit" />} />
      </div>
    </li>
  );
};

export default BoardListItem;
