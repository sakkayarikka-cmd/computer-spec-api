export default function handler(req, res) {

  const computers = [

    // ================= GAMING =================
    {
      id: 1,
      name: "Gaming Starter",
      type: "gaming",
      cpu: "Ryzen 5 5600",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      gpu: "RTX 3060",
      os: "Windows 11",
      price: 25900
    },
    {
      id: 2,
      name: "Gaming Plus",
      type: "gaming",
      cpu: "Ryzen 5 7600",
      ram: "16GB DDR5",
      storage: "1TB NVMe",
      gpu: "RX 6700XT",
      os: "Windows 11",
      price: 32900
    },
    {
      id: 3,
      name: "Gaming Pro",
      type: "gaming",
      cpu: "i7-13700K",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      gpu: "RTX 4080",
      os: "Windows 11 Pro",
      price: 42900
    },
    {
      id: 4,
      name: "Gaming Ultra",
      type: "gaming",
      cpu: "i9-14900K",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      gpu: "RTX 4090",
      os: "Windows 11 Pro",
      price: 89900
    },

    // ================= OFFICE =================
    {
      id: 5,
      name: "Office Basic",
      type: "office",
      cpu: "i3-12100",
      ram: "8GB",
      storage: "512GB SSD",
      gpu: "Integrated",
      os: "Windows 11",
      price: 18500
    },
    {
      id: 6,
      name: "Office Pro",
      type: "office",
      cpu: "i5-13400",
      ram: "16GB",
      storage: "1TB SSD",
      gpu: "Integrated",
      os: "Windows 11",
      price: 22900
    },
    {
      id: 7,
      name: "Office Advanced",
      type: "office",
      cpu: "Ryzen 5 5600G",
      ram: "16GB",
      storage: "1TB SSD",
      gpu: "Integrated Vega",
      os: "Windows 11",
      price: 24900
    },

    // ================= CODING =================
    {
      id: 8,
      name: "Programmer Set",
      type: "coding",
      cpu: "Ryzen 7 7700X",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      gpu: "RTX 4060",
      os: "Windows 11",
      price: 36900
    },
    {
      id: 9,
      name: "Dev Advanced",
      type: "coding",
      cpu: "i7-14700K",
      ram: "32GB DDR5",
      storage: "2TB NVMe",
      gpu: "RTX 4070",
      os: "Windows 11 Pro",
      price: 45900
    },
    {
      id: 10,
      name: "Full Stack Beast",
      type: "coding",
      cpu: "Ryzen 9 7900X",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      gpu: "RTX 4080",
      os: "Windows 11 Pro",
      price: 55900
    },

    // ================= DESIGN =================
    {
      id: 11,
      name: "Graphic Design",
      type: "design",
      cpu: "i9-13900K",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      gpu: "RTX 4090",
      os: "Windows 11 Pro",
      price: 65900
    },
    {
      id: 12,
      name: "Video Editor Pro",
      type: "design",
      cpu: "Ryzen 9 7950X",
      ram: "64GB DDR5",
      storage: "4TB NVMe",
      gpu: "RTX 4090",
      os: "Windows 11 Pro",
      price: 79900
    },

    // ================= STREAMING =================
    {
      id: 13,
      name: "Streaming Setup",
      type: "streaming",
      cpu: "Ryzen 7 5800X",
      ram: "32GB",
      storage: "1TB SSD",
      gpu: "RTX 4070",
      os: "Windows 11",
      price: 39900
    },

    // ================= BUDGET =================
    {
      id: 14,
      name: "Budget Gamer",
      type: "budget",
      cpu: "Ryzen 5 5500",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "RX 6600",
      os: "Windows 11",
      price: 21900
    },
    {
      id: 15,
      name: "Student Basic",
      type: "budget",
      cpu: "i3-10100",
      ram: "8GB",
      storage: "512GB SSD",
      gpu: "Integrated",
      os: "Windows 11",
      price: 15900
    }

  ];

  const { use, maxprice } = req.query;

  let result = computers;

  if (use) {
    const keyword = use.toLowerCase();
    result = result.filter(pc =>
      pc.type.includes(keyword)
    );
  }

  if (maxprice) {
    const budget = parseInt(maxprice);
    result = result.filter(pc =>
      pc.price <= budget
    );
  }

  res.status(200).json({
    total: result.length,
    data: result
  });
}