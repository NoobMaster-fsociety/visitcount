// functions/visit-count.js
let count = 0;

export default async function (req, res) {
  count++;

  res.json({ count });
}
