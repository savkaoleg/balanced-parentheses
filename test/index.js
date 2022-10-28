import { describe, it } from "node:test";
import assert from "node:assert";

import { check } from "../src/index.js";

const tests = new Map([
  ["{}", true],
  ["{([})]", false],
  ["{([])}{([])}{([])}", true],
  ["asdf{asdf}{f323[324]32}{324}", true],
  ["4fff({f}f{[]tt})444[{}]tt", true],
  ["{{{", false],
  ["", true],
]);

describe("Balanced parentheses", () => {
  for (let [str, expect] of tests) {
    it(`"${str}" should be ${expect}`, () => {
      assert.strictEqual(check(str), expect);
    });
  }
});
