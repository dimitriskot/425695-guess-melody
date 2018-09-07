import tracks from "./tracks";

export const levels = [
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: `Выберите инди-рок треки`,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  }
];

export const getLevelData = (currentLevel) => {
  return levels[currentLevel];
};
