describe("toBeFalsy", function() {

  it("passes if false is fasly", function() {

    expect(false).toBeFalsy();

  });

  it("passes if null is fasly", function() {

    expect(null).toBeFalsy();

  });

  it("passes if undefined is fasly", function() {

    expect(undefined).toBeFalsy();

  });

  it("passes if 0 is fasly", function() {

    expect(0).toBeFalsy();

  });

  it("passes if '' is fasly", function() {

    expect('').toBeFalsy();

  });

  it("fails if true is truthy", function() {

    expect(true).not.toBeFalsy();

  });

  it("fails if 'Hello World' is truthy", function() {

    expect('Hello World').not.toBeFalsy();

  });

  it("fails if 1 is truthy", function() {

    expect(1).not.toBeFalsy();

  });

  it("fails if [1, 3, 7] is truthy", function() {

    expect([1, 3, 7]).not.toBeFalsy();

  });

  it("fails if [] is truthy", function() {

    expect([]).not.toBeFalsy();

  });

  it("fails if {} is truthy", function() {

    expect({}).not.toBeFalsy();

  });

});
