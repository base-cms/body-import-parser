const chai = require('chai');
const request = require('supertest');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');

global.chai = chai;
global.request = request;
global.sinon = sinon;
global.chai = chai;
global.expect = chai.expect;

chai.use(chaiAsPromised);
