import { useEffect } from 'react';
import { Container, Skeleton } from '@mui/material';

import Banner from '../components/banner';
import Board from '../components/board';
import Header from '../components/header';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUsers } from '../store/actionCreators';
import { userSlice } from '../store/slices/userSlice';
import { User } from '../types/User';

function App() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.userReducer);

  const { setUsersView } = userSlice.actions;

  useEffect(() => {
    if (!localStorage.getItem('Users')) {
      dispatch(fetchUsers()).then((response) =>
        dispatch(setUsersView(response.payload as User[])),
      );
    } else {
      dispatch(
        setUsersView(JSON.parse(localStorage.getItem('Users') as string)),
      );
    }
  }, []);

  return (
    <div className="app">
      <Container maxWidth="lg">
        {isLoading ? (
          <>
            <Header />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={'100%'}
              height={180}
              sx={{
                marginTop: '20px',
              }}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={'100%'}
              height={500}
              sx={{
                marginTop: '20px',
              }}
            />
          </>
        ) : (
          <>
            <Header />
            <Banner />
            <Board />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
