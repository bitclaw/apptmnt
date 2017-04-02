/*global describe, it, before */

import chai from 'chai';
import Library from '../lib/Apptmnt.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of Apptmnt',  () => {

  before(() => {
    apptmnt = new Apptmnt();
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Apptmnt');
    });
  });

});
