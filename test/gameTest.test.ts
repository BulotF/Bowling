import { assert, describe, it } from "vitest";
import { createGame } from "../src";

describe("Scénario simple", () => {
  it("Doit retourner 0 si aucune quille tombée", () => {
    // Given
    const game = createGame();
    // When
    //2*10 Tours
    for (let i = 0; i < 20; i++) {
      game.lancer(0);
    }
    // Then
    assert.equal(game.getScore(), 0);
  });

  it("Doit retourner 40 si 2 quilles tombées", () => {
    // Given
    const game = createGame();
    // When
    //2*10 Tours
    for (let i = 0; i < 20; i++) {
      game.lancer(2);
    }
    // Then
    assert.equal(game.getScore(), 2 * 20);
  });
});
