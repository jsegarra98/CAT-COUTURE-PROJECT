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
      const limit = parseInt(req.query.limit) || 12;
      let page = parseInt(req.query.page) || 1;

      if (page < 1) {
        page = 1;
      }

      const allProducts = await productRepository.getPagedProducts(limit, page);
      const products = allProducts;

      const responseResults = {
        products,
        currentPage: page,
        itemsPerPage: limit,
        totalItems: allProducts.length,
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
