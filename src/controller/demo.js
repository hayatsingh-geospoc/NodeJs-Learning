const addition = (req, res) => {
  let data = { name: 'harry', rollno: 23, comp: 'evervent' };

  return res.status(200).send({ msg: data });
};

module.exports.addition = addition;
