import slang from "../../data/slang.json";

export default function getSlang(req, res) {
  const response = slang.sort(() => Math.random() - Math.random()).slice(0, 10);

  res.status(200).json(response);
}
