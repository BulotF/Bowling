import { assert, describe, it } from "vitest";
import { createGame } from "../src";

describe("Doit retourner 0 si aucune quille tombée", () => {
  it("foo", () => {
    // Given
    const game = createGame();

    // When

    //2*10 Tours
    for (let i = 0; i < 20; i++) {
      game.lancer(0);
    }

    // Then
    assert.equal(game.score, 0);
  });
});
