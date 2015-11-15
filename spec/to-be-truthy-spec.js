describe("toBeTruthy", function() {

  it("passes if true is truthy", function() {

    expect(true).toBeTruthy();

  });

  it("passes if 'Hello World' is truthy", function() {

    expect('Hello World').toBeTruthy();

  });

  it("passes if 1 is truthy", function() {

    expect(1).toBeTruthy();

  });

  it("passes if [1, 3, 7] is truthy", function() {

    expect([1, 3, 7]).toBeTruthy();

  });

  it("passes if [] is truthy", function() {

    expect([]).toBeTruthy();

  });

  it("passes if {} is truthy", function() {

    expect({}).toBeTruthy();

  });

  it("fails if false is fasly", function() {

    expect(false).not.toBeTruthy();

  });

  it("fails if null is fasly", function() {

    expect(null).not.toBeTruthy();

  });

  it("fails if undefined is fasly", function() {

    expect(undefined).not.toBeTruthy();

  });

  it("fails if 0 is fasly", function() {

    expect(0).not.toBeTruthy();

  });

  it("fails if '' is fasly", function() {

    expect('').not.toBeTruthy();

  });


});
