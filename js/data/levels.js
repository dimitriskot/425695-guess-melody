import tracks from "./tracks";

export const levels = [
  {
    title: `Выберите поп треки`,
    type: `tracks`,
    tracks: [
      tracks[0],
      tracks[1],
      tracks[2],
      Object.assign({}, tracks[4], {isCorrect: true})
    ],
  },
  {
    title: `Выберите электро треки`,
    type: `tracks`,
    tracks: [
      tracks[0],
      tracks[1],
      Object.assign({}, tracks[5], {isCorrect: true}),
      tracks[3]
    ],
  },
  {
    title: `Выберите R&B треки`,
    type: `tracks`,
    tracks: [
      tracks[2],
      Object.assign({}, tracks[3], {isCorrect: true}),
      tracks[4],
      tracks[1]
    ],
  },
  {
    title: `Выберите рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[1], {isCorrect: true}),
      tracks[4],
      tracks[2],
      tracks[0]
    ],
  },
  {
    title: `Выберите джаз треки`,
    type: `tracks`,
    tracks: [
      tracks[0],
      Object.assign({}, tracks[1], {isCorrect: true}),
      tracks[2],
      tracks[3]
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[1], {isCorrect: true}),
      tracks[0],
      tracks[2]
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      tracks[1],
      Object.assign({}, tracks[2], {isCorrect: true}),
      tracks[4]
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      tracks[5],
      tracks[1],
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      tracks[1],
      tracks[2],
      Object.assign({}, tracks[4], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: true}),
      tracks[3],
      tracks[5]
    ],
  },
];

export const getLevelData = (currentLevel) => {
  return levels[currentLevel];
};
