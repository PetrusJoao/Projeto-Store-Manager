const { expect } = require('chai');
const sinon = require('sinon');

const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { result } = require('./mocks/product.model.mocks');

describe('Testes de unidade do model de products', function () {

  it('Acessando a lista com todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([result]);
    const products = await productModel.findAll();
    expect(products).to.be.deep.equal(result);
  });

  afterEach(sinon.restore);
});