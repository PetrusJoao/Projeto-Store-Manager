const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai)

const { productService } = require('../../../src/services');
const productController = require('../../../src/controllers/product.controller');
const { result } = require('./mocks/product.controller.mocks');

describe('Testes de unidade do controller de products', function () {

  it('Buscando todos os produtos', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'findAllProducts')
      .resolves({ type: null, message: result });

    await productController.getProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(result);
  });

  afterEach(sinon.restore);

});