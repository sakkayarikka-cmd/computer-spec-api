export default function handler(req, res) {
  const computers = [
    {
      id: 1,
      name: "Gaming Starter",
      cpu: "Ryzen 5 5600",
      gpu: "RTX 3060",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      price: 25900,
      type: "gaming"
    },
    {
      id: 2,
      name: "Gaming Pro",
      cpu: "i7-13700K",
      gpu: "RTX 4070",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      price: 45900,
      type: "gaming"
    },
    {
      id: 3,
      name: "Office Basic",
      cpu: "i3-12100",
      gpu: "Integrated",
      ram: "8GB",
      storage: "512GB SSD",
      price: 15900,
      type: "office"
    },
    {
      id: 4,
      name: "Office Pro",
      cpu: "Ryzen 5 5600G",
      gpu: "Integrated",
      ram: "16GB",
      storage: "1TB SSD",
      price: 19900,
      type: "office"
    },
    {
      id: 5,
      name: "Streamer Build",
      cpu: "Ryzen 7 5800X",
      gpu: "RTX 3070",
      ram: "32GB",
      storage: "2TB NVMe",
      price: 38900,
      type: "gaming"
    },
    {
      id: 6,
      name: "Ultra Gaming",
      cpu: "i9-13900K",
      gpu: "RTX 4090",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      price: 99900,
      type: "gaming"
    },
    {
      id: 7,
      name: "Budget Gaming",
      cpu: "Ryzen 5 3600",
      gpu: "GTX 1660",
      ram: "16GB",
      storage: "512GB SSD",
      price: 19900,
      type: "gaming"
    },
    {
      id: 8,
      name: "Mini Office",
      cpu: "i5-12400",
      gpu: "Integrated",
      ram: "16GB",
      storage: "512GB SSD",
      price: 18900,
      type: "office"
    },
    {
      id: 9,
      name: "Content Creator",
      cpu: "Ryzen 9 7900X",
      gpu: "RTX 4080",
      ram: "64GB",
      storage: "2TB NVMe",
      price: 78900,
      type: "gaming"
    },
    {
      id: 10,
      name: "School PC",
      cpu: "Athlon 3000G",
      gpu: "Integrated",
      ram: "8GB",
      storage: "256GB SSD",
      price: 10900,
      type: "office"
    }
  ];

  res.status(200).json({
    success: true,
    total: computers.length,
    data: computers
  });
}