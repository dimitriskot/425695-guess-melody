import {selectTemplate} from "../components/util";
import {getLevelData} from "../data/levels";
import getPlayerResults from "./player-results";
import HeaderView from "../components/common/header-view";
import GameView from "../components/common/game-view";
import GameGenreView from "../components/game-genre";
import GameArtistView from "../components/game-artist";
import {CLASSES} from "../data/constants";

export const updateGame = (game) => {
  const levelData = getLevelData(game.level);
  const LevelView = levelData.type === `genre` ? GameGenreView : GameArtistView;

  const header = new HeaderView(game).element;
  const level = new LevelView(game, levelData).element;
  const gameScreen = new GameView().element;

  gameScreen.classList.add(CLASSES[levelData.type]);
  gameScreen.appendChild(header);
  gameScreen.appendChild(level);

  if (game.levelsCount > 0 && game.lives !== 0) {
    selectTemplate(gameScreen);
  } else {
    getPlayerResults([6, 7, 8, 9], game);
  }
};
