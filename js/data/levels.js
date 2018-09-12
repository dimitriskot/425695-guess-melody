import tracks from "./tracks";

const getTitle = (genre) => {
  return `Выберите ${genre} треки`;
};

export const levels = [
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false})
    ]
  },
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false})
    ]
  },
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false})
    ]
  },
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false})
    ]
  },
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false})
    ]
  },
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  },
  {
    title: `Кто исполняет эту песню?`,
    type: `artists`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false})
    ]
  },
  {
    title: getTitle(tracks[3].genre),
    type: `genre`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ]
  }
];

export const getLevelData = (currentLevel) => {
  return levels[currentLevel];
};
