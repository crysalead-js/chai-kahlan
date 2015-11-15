require('chai-jasmine/chai-jasmine');
if (typeof chai === 'undefined') {
  throw new Error("You need to include chai library first.")
}
chai.use(require('./src/kahlan'));