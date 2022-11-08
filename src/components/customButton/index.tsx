import { FC } from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';

type CustomButtonProps = {
  center?: boolean;
  width?: number;
  variant?: string;
  bgcolor?: string;
  text?: string | JSX.Element;
  func?: () => void;
  color?: string;
};

const CustomButton: FC<CustomButtonProps> = ({
  width,
  bgcolor,
  func,
  color,
  text,
  center,
}) => {
  const MyButton = styled(Button)({
    backgroundColor: bgcolor,
    color: color,
    width: width,
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
    margin: center ? '0 auto' : 0,
  });

  return <MyButton onClick={func}>{text}</MyButton>;
};

export default CustomButton;
