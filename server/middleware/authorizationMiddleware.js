const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://cat-couture-purr/api",
  issuerBaseURL: `https://dev-vsf4ucawi1v3rdvy.au.auth0.com/`,
});

const checkScopes = requiredScopes("");

module.exports = {
  checkJwt,
  checkScopes,
};
