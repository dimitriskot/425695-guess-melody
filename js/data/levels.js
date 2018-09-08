import tracks from "./tracks";

const levelsData = {
  tracks: [
    {
      genre: `indie-rock`,
      title: `Выберите инди-рок треки`
    }
  ],
  artists: [
    {
      artist: `jingle punks`,
      title: `Кто исполняет эту песню?`
    }
  ]
};

export const levels = [
  {
    title: levelsData.tracks[0].title,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: levelsData.artists[0].title,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: levelsData.tracks[0].title,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: levelsData.artists[0].title,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: levelsData.tracks[0].title,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: levelsData.artists[0].title,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: levelsData.tracks[0].title,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: levelsData.artists[0].title,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: levelsData.tracks[0].title,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: levelsData.artists[0].title,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: levelsData.tracks[0].title,
    type: `tracks`,
    tracks: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: false}),
      Object.assign({}, tracks[2], {isCorrect: false}),
      Object.assign({}, tracks[3], {isCorrect: true})
    ],
  },
  {
    title: levelsData.artists[0].title,
    type: `artists`,
    artists: [
      Object.assign({}, tracks[0], {isCorrect: false}),
      Object.assign({}, tracks[1], {isCorrect: true}),
      Object.assign({}, tracks[2], {isCorrect: false}),
    ],
  },
  {
    title: levelsData.tracks[0].title,
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
