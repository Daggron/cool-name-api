const expect = require('chai').expect
const uncoolifyService = require('./uncoolifyService');
const alphaNumericeName = uncoolifyService.alphaNumericName;

describe('uncoolifyService.alphaNumericeName', () => {
  it('should return false if a non-string value is provided', () => {
    expect(alphaNumericeName(1)).to.be.false;
    expect(alphaNumericeName({})).to.be.false;
    expect(alphaNumericeName([])).to.be.false;
  });

  it('should uncoolify leet', () => {
    expect(alphaNumericeName('h3110')[0]).to.equal('hello');
  });

  it('should uncoolify round letters', () => {
    expect(alphaNumericeName('ⓗⓔⓛⓛⓞ')[0]).to.equal('hello');
  });

  it('should uncoolify box letters', () => {
    expect(alphaNumericeName('🄷🄴🄻🄻🄾')[0]).to.equal('hello');
  });

  /*
   * TODO: Handle this case
   * it('should round the first and last and replace all else the specified number eqv.', () => {
   *  expect(alphaNumericeName('hello')[3]).to.equal('ⓗ311ⓞ');
   * })
   */

  it('should uncoolify the symbolic equivalent', () => {
    expect(alphaNumericeName('he||o(@')[0]).to.equal('helloca');
  })

  /*
   * TODO: Handle this case
   * it('should mirror each letter', () => {
   *  expect(alphaNumericeName('hello')[5]).to.equal('‮hello');
   * });
   */

  it('should uncoolify emojis', () => {
    expect(alphaNumericeName('♓🎗👢👢⚽')[0]).to.equal('hello');
  });

  it('should uncoolify letters with x above and below', () => {
    expect(alphaNumericeName('h͓̽e͓̽l͓̽l͓̽o͓̽')[0]).to.equal('hello');
  });

  it('should uncoolify flipped letters', () => {
    expect(alphaNumericeName('ɥǝʃʃo')[0]).to.equal('hello');
  });
})
