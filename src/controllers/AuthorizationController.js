module.exports = {
  async store(req, res) {
    try {
      console.log(req.body);
      const { value } = req.body;
      if (value < 100) {
        console.log("transação aceita " + new Date())
        return res.status(200).json(req.body)
      } else {
        console.log("transação recusada")
        return res.status(401).json({ code: "401", message: "Unauthorized" })
      }
    } catch (error) {
      console.log("Erro interno do servidor")
      return res.status(500).json({code: "500", message: "Internal error"})
    }
  },
};
