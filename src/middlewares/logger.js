const logger = (req, res, next) => {
  console.log('\n', '===============================================', '\n');
  console.log(`URL: ${req.url}`);
  console.log(`Limit: ${req.query.limit}`);
  console.log(`Query: ${req.query.q}`);
  console.log(`Params: ${req.params.pepe}`);
  console.log('\n', '===============================================', '\n');
  return next();
}

module.exports = logger;
