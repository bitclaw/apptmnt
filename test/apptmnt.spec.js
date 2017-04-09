/*global describe, it, before */

import chai from 'chai';
import Apptmnt from '../src/apptmnt/apptmnt.js';

chai.expect();

const expect = chai.expect;

let apptmnt;

describe('Given an instance of Apptmnt',  () => {

  before(() => {
    apptmnt = new Apptmnt();
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(apptmnt.name).to.be.equal('Apptmnt');
    });
  });

});
