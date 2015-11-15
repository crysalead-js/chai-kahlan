describe("toBeUndefined", function() {

  it("passes if undefined is undefined", function() {

    expect(undefined).toBeUndefined();

  });

  it("fails if false is undefined", function() {

    expect(false).not.toBeUndefined();

  });

  it("fails if [] is undefined", function() {

    expect([]).not.toBeUndefined();

  });

  it("fails if 0 is undefined", function() {

    expect(0).not.toBeUndefined();

  });

  it("fails if '' is undefined", function() {

    expect('').not.toBeUndefined();

  });

});
