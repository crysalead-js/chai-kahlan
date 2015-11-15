function CustomError() {
  var temp = Error.apply(this, arguments);
  this.name = 'CustomError';
  this.message = temp.message;
}
CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: CustomError,
    writable: true,
    configurable: true
  }
});

describe("toThrow", function() {

  it("catches any kind of exception", function() {

    var closure = function() {
      throw new CustomError();
    };
    expect(closure).toThrow();

    var closure = function() {
      throw new Error('Error message');
    };
    expect(closure).toThrow();

  });

  it("catches a detailed exception", function() {

    var closure = function() {
      throw new CustomError('exception message');
    };
    expect(closure).toThrow(new CustomError('exception message'));

  });

  it("catches a detailed exception using the message name only", function() {

    var closure = function() {
      throw new CustomError('Error message');
    };
    expect(closure).toThrow('Error message');

  });

  it("catches an exception message using a regular expression", function() {

    var closure = function() {
      throw new CustomError('exception stuff message');
    };
    expect(closure).toThrow(/exception (.*?) message/);

  });

  it("doesn't catch not an exception", function() {

    var closure = function() {
      return true;
    };
    expect(closure).not.toThrow(new Error());

  });

  it("doesn't catch whatever exception if a detailed one is expected", function() {

    var closure = function() {
      throw new CustomError();
    };
    expect(closure).not.toThrow(new CustomError('Error message'));

  });

  it("doesn't catch the exception if the expected Error has a different class name", function() {

    var closure = function() {
      throw new Error('Error message');
    };
    expect(closure).not.toThrow(new CustomError('Error message'));

  });

});
