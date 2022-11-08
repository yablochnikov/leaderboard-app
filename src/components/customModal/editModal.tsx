import { FC, useState } from 'react';
import { OutlinedInput, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import modalBg from '../../assets/images/modalBg.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userSlice } from '../../store/slices/userSlice';
import CustomButton from '../customButton';

const EditModal: FC = () => {
  const dispatch = useAppDispatch();
  const { isEditModal, selectedUser } = useAppSelector(
    (state) => state.userReducer,
  );
  const { closeModal, changeUser } = userSlice.actions;
  const [userScore, setUserScore] = useState<string>('');

  const style = {
    textAlign: 'center',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    maxHeight: '300px',
    width: 500,
    borderRadius: 5,
    boxShadow: 24,
    flexDirection: 'column',
    p: 4,
    background: `url(${modalBg})center center no-repeat, #f3f3f3`,
    display: 'flex',
  };

  const inputStyles = {
    width: 231,
    margin: '10px auto',
    height: 35,
    borderRadius: 10,
    padding: '0 20px',
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleInput = (
    value: string,
    func: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    func(value);
  };

  const editUser = () => {
    dispatch(changeUser(Number(userScore)));
  };

  return (
    <Modal
      open={isEditModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          component="h2"
          className="modal__heading"
          sx={{
            marginTop: '50px',
            marginBottom: '10px',
            fontWeight: '600',
            fontSize: '22px',
            lineHeight: '27px',
            color: '#030327',
          }}
        >
          Edit user score number {selectedUser}
        </Typography>
        <OutlinedInput
          sx={inputStyles}
          placeholder="Edit points"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInput(e.target.value, setUserScore);
          }}
        />
        <CustomButton
          text="Save"
          color="#030327"
          bgcolor="#F99746"
          width={75}
          center={true}
          func={editUser}
        />
      </Box>
    </Modal>
  );
};

export default EditModal;
