module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , flag = _.flag;

  Assertion.addMethod("toBeA", function (expected) {
    if (expected === 'bool') {
      expected = 'boolean';
    }
    if (expected === 'int') {
      expected = 'integer';
    }
    if (expected === 'float') {
      expected = 'double';
    }

    function getType(value) {
      if (typeof value === 'object') {
        if (value === null) {
          return 'null';
        }
        if (Array.isArray(value)) {
          return 'array';
        }
        return 'object';
      }
      if (typeof value === 'string') {
        return 'string';
      }
      if (typeof value === 'boolean') {
        return 'boolean';
      }
      if (typeof value === 'function') {
        return 'function';
      }
      if (typeof value === 'number') {
        return value % 1 === 0 ? 'integer' : 'double';
      }
      if (typeof value === 'symbol') {
        return 'symbol';
      }
      return 'undefined';
    }

    var article;
    var type = getType(this._obj);

    if (this._obj != null) {
      article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';
    } else {
      article = 'like ';
    }

    this.assert(
        type === expected
      , 'expected #{this} to be ' + article + '#{exp}'
      , 'expected #{this} not to be ' + article + '#{exp}'
      , type
    );
  });

  Assertion.addMethod("toBeAn", function (expected) {
    this.toBeA(expected);
  });

  Assertion.addMethod("toBeAnInstanceOf", function (expected) {
    this.an.instanceof(expected);
  });

  Assertion.addMethod("toContainKey", function (expected, a) {
    if (arguments.length > 1) {
      expected = Array.prototype.slice.call(arguments);
    }
    this.contain.all.keys(expected);
  });

  Assertion.addMethod("toContainKeys", function (expected) {
    if (arguments.length > 1) {
      expected = Array.prototype.slice.call(arguments);
    }
    this.contain.all.keys(expected);
  });

  Assertion.addMethod("toHaveLength", function (expected) {
    this.length(expected);
  });

  Assertion.addMethod("toMatch", function (expected) {
    if (typeof expected === 'function') {
      this.assert(
          expected(this._obj)
        , 'expected #{this} to match the closure'
        , 'expected #{this} not to match the closure'
      );
    } else {
      this.match(new RegExp(expected));
    }
  });

  Assertion.addMethod("toThrow", function (constructor, errMsg, msg) {

    function stringify (expected) {
      if (expected.e) {
        return expected.e.message ? expected.e.toString() : expected.e.name;
      }
      if (expected.type) {
        var constructor = expected.type;
        return new constructor().name;
      }
    }

    function similarException (expected, thrown) {
      var exception = expected.e;
      if (exception && exception.constructor === thrown.constructor) {
        return exception.name === thrown.name;
      }
      return !expected.type || thrown instanceof expected.type;
    }

    function similarMessage (expected, thrown) {
      var isThrownedException = typeof thrown === 'object' && thrown.hasOwnProperty('message');
      var message = isThrownedException ? thrown.message : '' + thrown;
      if (expected.errMsg instanceof RegExp) {
        return expected.errMsg.test(message);
      }
      if (!expected.errMsg) {
        return true;
      }
      if (expected.action === 'matching') {
        return message === expected.errMsg;
      }
      return !!~message.indexOf(expected.errMsg);
    }

    function parseParams (constructor, errMsg) {
      var expected = { placeholder: 'an error', action: 'matching' };
      if (!arguments.length || !constructor) {
        return expected;
      }
      if (constructor instanceof RegExp) {
        expected.errMsg = constructor;
        return expected;
      }
      if (typeof constructor === 'string') {
        expected.errMsg = constructor;
        expected.action = 'including';
        return expected;
      }
      if (constructor instanceof Error) {
        expected.e = constructor;
        expected.type = constructor.constructor;
        expected.errMsg = constructor.message;
      } else {
        expected.type = constructor;
        expected.errMsg = errMsg;
        if (typeof errMsg === 'string') {
          expected.action = 'including';
        }
      }
      expected.placeholder = '#{exp}';
      return expected;
    }

    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('function');

    var thrown;
    var expected = parseParams.apply(null, arguments);

    try {
      obj();
    } catch (err) {
      thrown = err;
    }

    if (thrown === undefined) {
      this.assert(
          false
        , 'expected #{this} to throw ' + expected.placeholder
        , 'expected #{this} to not throw ' + expected.placeholder
        , stringify(expected)
      );
      return this;
    }

    var similarException = similarException(expected, thrown);
    var similarMessage = similarMessage(expected, thrown);

    if (!similarException || !expected.errMsg) {
      this.assert(
          similarException && similarMessage
        , 'expected #{this} to throw ' + expected.placeholder + ' but #{act} was thrown'
        , 'expected #{this} to not throw ' + expected.placeholder + ' but #{act} was thrown'
        , stringify(expected)
        , (thrown instanceof Error ? thrown.toString() : thrown)
      );
    } else {
      this.assert(
          similarException && similarMessage
        , 'expected #{this} to throw error ' + expected.action + ' #{exp} but got #{act}'
        , 'expected #{this} to not throw error ' + expected.action + ' #{exp}'
        , expected.errMsg
        , (thrown instanceof Error ? thrown.message : thrown)
      );
    }
    flag(this, 'object', thrown);
    return this;
  });

  Assertion.addMethod("toThrowError", function (constructor, errMsg, msg) {
    throw new Error('Unexisting toThrowError matcher');
  });
};
