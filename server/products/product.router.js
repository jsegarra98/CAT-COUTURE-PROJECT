const express = require("express");
const Joi = require("joi");
const router = express.Router();
const productRepository = require("./product.repository");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      const limit = parseInt(req.query.limit) || 10;
      let page = parseInt(req.query.page) || 1;

      if (page < 1) {
        page = 1;
      }

      const allProducts = await productRepository.getProducts();
      const products = await productRepository.getPagedProducts(limit, page);

      const responseResults = {
        products,
        currentPage: page,
        itemsPerPage: limit,
        totalItems: allProducts.length,
        totalPages: allProducts.length / limit,
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
