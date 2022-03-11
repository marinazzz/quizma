import idiomer from "../../data/idiomer.json";

export default function getIdioms(req, res) {
  const response = idiomer
    .sort(() => Math.random() - Math.random())
    .slice(0, 10);

  res.status(200).json(response);
}
