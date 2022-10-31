import { FC } from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import './customButton.scss';

type CustomButtonProps = {
  variant?: string;
  bgcolor?: string;
  text?: string | JSX.Element;
};

const CustomButton: FC<CustomButtonProps> = ({ bgcolor, text }) => {
  const MyButton = styled(Button)({
    backgroundColor: bgcolor,
    color: '#fff',
    height: 24,
    fontWeight: '600',
    fontSize: 10,
    lineHeight: '12px',
    borderRadius: 10,
    padding: '6px 24px',
    '&:hover': {
      color: '#fff',
      backgroundColor: bgcolor,
    },
    '&:disabled': {
      backgroundColor: '#f3f3f3',
    },
  });

  return <MyButton>{text}</MyButton>;
};

export default CustomButton;
