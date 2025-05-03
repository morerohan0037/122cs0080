const numberService = require('../services/numberService');

exports.getNumbers = async (req, res) => {
  const id = req.params.numberid;

  if (!['p', 'f', 'e', 'r'].includes(id)) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  const startTime = Date.now();

  try {
    const response = await numberService.processNumberId(id);
    const elapsed = Date.now() - startTime;

    if (elapsed > 500) {
      console.warn("Warning: Response exceeded 500ms.");
    }

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", detail: err.message });
  }
};
