// gets random objects from elements-array and push it to a new array

export const randomArray = (arr) => {
  const randomArray = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const object = arr[randomIndex];
    if (!randomArray.includes(object)) {
      randomArray.push(object);
    }
  }
  return randomArray;
};

// const randomObjects = () => {
//   const randomFriends = [];
//   for (var i = 0; i < 5; i++) {
//     const randomIndex = Math.floor(Math.random() * friends.length);
//     const object = friends[randomIndex];
//     if (!randomFriends.includes(object)) {
//       randomFriends.push(object);
//     }
//   }
//   return randomFriends;
// };
