type Game = {
  lancer: (int: number) => void;
  score: number;
};
export function createGame(): Game {
  return {
    lancer: (int: number) => {},
    score: 0,
  };
}
