import { FC } from 'react';
import Button from '@mui/material/Button';

import './customButton.scss';

type CustomButtonProps = {
  text: string;
  width: number;
  height: number;
};

const customButton: FC<CustomButtonProps> = () => {
  return <Button></Button>;
};

export default customButton;
