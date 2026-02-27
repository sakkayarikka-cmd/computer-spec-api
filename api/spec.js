export default function handler(req, res) {

  const computers = [
    {
      id: 1,
      name: "Gaming Starter",
      type: "gaming",
      cpu: "Ryzen 5 5600",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      gpu: "RTX 3060",
      os: "Windows 11"
    },
    {
      id: 2,
      name: "Gaming Pro",
      type: "gaming",
      cpu: "i7-13700K",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      gpu: "RTX 4080",
      os: "Windows 11 Pro"
    },
    {
      id: 3,
      name: "Office Basic",
      type: "office",
      cpu: "i3-12100",
      ram: "8GB",
      storage: "512GB SSD",
      gpu: "Integrated",
      os: "Windows 11"
    },
    {
      id: 4,
      name: "Programmer Set",
      type: "coding",
      cpu: "Ryzen 7 7700X",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      gpu: "RTX 4060",
      os: "Windows 11"
    },
    {
      id: 5,
      name: "Graphic Design",
      type: "design",
      cpu: "i9-13900K",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      gpu: "RTX 4090",
      os: "Windows 11 Pro"
    }
  ];

  const { use } = req.query;

  if (use) {
    const keyword = use.toLowerCase();

    const recommendation = computers.find(pc =>
      pc.type.includes(keyword)
    );

    return res.status(200).json({
      message: "Recommended Spec",
      recommendation
    });
  }

  res.status(200).json(computers);
}