// const QUESTIONS_COUNT = 10;
// const SECOND_MS = 1000;
// const MINUTE_MS = SECOND_MS * 60;
// const LIVES_COUNT = 3;
// const GAME_TIME_LIMIT = MINUTE_MS * 5;
// // for more detailed testing, declaring limit for 1 answer
// const TIME_LIMIT_FOR_ONE_ANSWER = {
//   MIN: SECOND_MS * 2,
//   MAX: MINUTE_MS * 1.2
// };

// const getRandomAnswerSuccess = () => Math.random() >= 0.4;
// const getRandomAnswerTime = () => +(Math.random() * (TIME_LIMIT_FOR_ONE_ANSWER.MAX - TIME_LIMIT_FOR_ONE_ANSWER.MIN) + TIME_LIMIT_FOR_ONE_ANSWER.MIN).toFixed(0);


// const getRandomResults = () => {
//   let answersCollection = [];
//   let fails = 0;
//   let gameTime = 0;
//   let leftNotes = LIVES_COUNT;
//   for (let i = 0; i < QUESTIONS_COUNT; i++) {
//     const answerTime = getRandomAnswerTime();
//     gameTime = gameTime + answerTime;
//     if (gameTime >= GAME_TIME_LIMIT) {
//       const answerItem = {
//         succsess: null,
//         time: answerTime
//       };
//       answersCollection.push(answerItem);
//       break;
//     }
//     const answerItem = {
//       succsess: true,
//       time: answerTime
//     };
//     answersCollection.push(answerItem);
//     if (!answerItem.succsess) {
//       fails++;
//       leftNotes--;
//     }
//     if (fails === LIVES_COUNT) {
//       break;
//     }
//   }
//   const results = {
//     answers: answersCollection,
//     leftNotes
//   };
//   console.log("fails:", fails);
//   console.log("GAME_TIME_LIMIT:", GAME_TIME_LIMIT);
//   console.log("gameTime:", gameTime);
//   return results;
// };

// export {
//   getRandomResults
// };
