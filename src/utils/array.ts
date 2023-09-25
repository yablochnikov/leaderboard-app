import { User } from '../types/User';

export const sortArr = (arr: User[]) => {
  const newArr = [...arr];
  newArr.sort((a, b) => (b.score ? b.score : 0) - (a.score ? a.score : 0));
  return newArr;
};

export const findHighest = (arr: User[][]) => {
  const newArr: User[][] = JSON.parse(JSON.stringify(arr));
  newArr.forEach((userArr: User[]) => {
    userArr.sort((currentUser, nextUser) =>
      (currentUser.name as string).localeCompare(nextUser.name as string),
    );
    userArr.forEach((el) => {
      el.score = el.score ? (el.score as number) : 0;
    });
  });

  const res: User[] = newArr.reduce((currentArr, nextArr) =>
    currentArr.map((user, i): User => {
      if (nextArr[i] && user.name === nextArr[i].name) {
        return {
          name: user.name,
          score: (user.score as number) + (nextArr[i].score as number),
        };
      } else {
        return {
          name: user.name,
          score: user.score as number,
        };
      }
    }),
  );

  res.sort(
    (currentUser, nextUser) =>
      (nextUser.score as number) - (currentUser.score as number),
  );
  return res;
};

export const findDifference = (arr: User[][], page: number) => {
  const res: number[] = [];
  if (page !== 0) {
    sortArr(arr[page]).forEach((currentDay, index) => {
      sortArr(arr[page - 1]).forEach((prevDay, i) => {
        if (prevDay.name === currentDay.name) {
          res.push(i - index);
        }
      });
    });
  }
  return res;
};
