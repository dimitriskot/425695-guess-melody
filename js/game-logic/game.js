import gameGenre from '../components/game-genre';
import gameArtist from '../components/game-artist';
import {selectTemplate} from '../components/util';
import {getLevelData} from "../data/levels";
import resultSuccess from '../components/result-success';

export const playGame = (game) => {
  const levelData = getLevelData(game.level);
  const renderLevel = levelData.type === `tracks` ? gameGenre : gameArtist;

  if (game.levelsCount > 0) {
    selectTemplate(renderLevel(game, levelData));
  } else {
    selectTemplate(resultSuccess(game));
  }
};
