const notFound = (req, res) => {
  res.status(404).json("notFound");
};

module.exports = notFound;
