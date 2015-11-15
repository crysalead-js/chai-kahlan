describe("toBeAn", function() {

  it("passes if true is a boolean", function() {

    expect(true).toBeAn('boolean');

  });

  it("passes if false is a boolean", function() {

    expect(false).toBeAn('boolean');

  });

  it("passes if true is a bool", function() {

    expect(true).toBeAn('bool');

  });

  it("passes if false is a bool", function() {

    expect(false).toBeAn('bool');

  });

  it("passes if 1 is an integer", function() {

    expect(1).toBeAn('integer');

  });

  it("passes if 1 is an int", function() {

    expect(1).toBeAn('int');

  });

  it("passes if 'Hello World' is a string", function() {

    expect('Hello World').toBeAn('string');

  });

  it("passes if [1, 3, 7] is an array", function() {

    expect([1, 3, 7]).toBeAn('array');

  });

  it("passes if 1.5 is a float", function() {

    expect(1.5).toBeAn('float');

  });

  it("passes if an instance of stdClass is an object", function() {

    expect({}).toBeAn('object');

  });

  it("passes if null is NULL", function() {

    expect(null).toBeAn('null');

  });

});
