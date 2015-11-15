describe("toBeAnInstanceOf", function() {

  it("passes if an instance of {} is an Object", function() {

    expect({}).toBeAnInstanceOf(Object);

  });

  it("fails if an instance of {} is an instance of String", function() {

    expect({}).not.toBeAnInstanceOf(String);

  });

});
