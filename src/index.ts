type Game = {
  lancer: (i: number) => void;
  getScore: () => number;
};
export function createGame(): Game {
  let quillesTotales = 0;
  return {
    lancer: (i: number) => {
      quillesTotales += i;
    },
    getScore: () => quillesTotales,
  };
}
