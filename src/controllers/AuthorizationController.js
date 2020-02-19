module.exports = {
  async store(req, res) {
    try {
      const { value } = req.body;
      if (value < 100) {
        return res.status(200).json(req.body)
      } else {
        return res.status(401).json({ code: "401", message: "Unauthorized" })
      }
    } catch (error) {
      return res.status(500).json({code: "500", message: "Internal error"})
    }
  },
};
