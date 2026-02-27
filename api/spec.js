export default function handler(req, res) {

  const computers = [
    {
      id: 1,
      name: "Gaming PC",
      cpu: "Intel Core i5-12400F",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      gpu: "NVIDIA RTX 3060",
      os: "Windows 11"
    },
    {
      id: 2,
      name: "Office PC",
      cpu: "Intel Core i3-12100",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      gpu: "Integrated Graphics",
      os: "Windows 11"
    },
    {
      id: 3,
      name: "High-End PC",
      cpu: "Intel Core i7-13700K",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      gpu: "NVIDIA RTX 4080",
      os: "Windows 11 Pro"
    }
  ];

  res.status(200).json(computers);
}