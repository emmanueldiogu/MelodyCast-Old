export const user = (req, res) => {
  console.log(req.body);
  res.send({ message: "working from router" });
};
