module.exports = (req, res) => {

  const computerSpec = {
    cpu: "Intel Core i5-12400F",
    ram: "16GB DDR4",
    storage: "512GB NVMe SSD",
    gpu: "NVIDIA RTX 3060",
    os: "Windows 11"
  };

  res.status(200).json({
    message: "Computer Spec Information",
    data: computerSpec
  });
};