const fetchNumbers = require('../utils/numberFetcher');
const { WINDOW_SIZE } = require('../config');

const windows = {
  p: [],
  f: [],
  e: [],
  r: []
};

async function processNumberId(id) {
  const prevWindow = [...windows[id]];
  const newNumbers = await fetchNumbers(id);

  for (let num of newNumbers) {
    if (!windows[id].includes(num)) {
      if (windows[id].length >= WINDOW_SIZE) {
        windows[id].shift();
      }
      windows[id].push(num);
    }
  }

  const average = windows[id].reduce((a, b) => a + b, 0) / windows[id].length;

  return {
    windowPrevState: prevWindow,
    windowCurrState: [...windows[id]],
    average: Number(average.toFixed(2))
  };
}

module.exports = { processNumberId };
