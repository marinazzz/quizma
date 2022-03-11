import forkortelser from "../../data/forkortelser.json";

export default function getAbb(req, res) {
  const response = forkortelser
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  res.status(200).json(response);
}
