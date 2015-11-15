describe("toContainKey", function() {

  context("with an array", function() {

    it("passes when the key is contained", function() {

      expect({ a: 1, b: 2, c: 3 }).toContainKey('a');
      expect({ a: null }).toContainKey('a');

    });

    it("passes when the keys are contained", function() {

      expect({ a: 1, b: 2, c: 3 }).toContainKeys('a', 'b');
      expect({ a: 1, b: 2, c: 3 }).toContainKeys(['a', 'b']);

    });

    it("returns `false` when a key is missing", function() {

      expect({ a: 1, b: 2, c: 3 }).not.toContainKey('d');
      expect({ a: 1, b: 2, c: 3 }).not.toContainKeys('a', 'b', 'd');
      expect({ a: 1, b: 2, c: 3 }).not.toContainKeys(['a', 'b', 'd']);

    });

  });

  it("fails with non object", function() {

    expect([]).not.toContainKey('key');
    expect(false).not.toContainKey('0');
    expect(true).not.toContainKey('1');

  });

});