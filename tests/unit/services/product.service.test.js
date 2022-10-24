const { expect } = require('chai');
const sinon = require('sinon');

const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services')
const { result } = require('./mocks/product.service.mocks');

describe('Testes de unidade do Service de products', function () {

  it('Buscando a lista de todos os produtos', async function () {
    sinon.stub(productModel, 'findAll').resolves(result);
    const products = await productService.findAllProducts();

    expect(products.type).to.equal(null);
    expect(products.message).to.be.deep.equal(result);
  });

  afterEach(sinon.restore);

});