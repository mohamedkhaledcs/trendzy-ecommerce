const products = [
  {
    id: 1,
    name: "Men's Classic T-Shirt",
    category: "male",
    price: 299,
    image: "/images/male/tshirt-01.jpg",
    description: "High-quality cotton t-shirt for everyday wear."
  },
  {
    id: 2,
    name: "Men's Sneakers",
    category: "male",
    price: 599,
    image: "/images/male/sneakers-01.jpg",
    description: "Comfortable sneakers for running and casual wear."
  },
  {
    id: 3,
    name: "Women's Summer Dress",
    category: "female",
    price: 499,
    image: "/images/female/dress-01.jpg",
    description: "Lightweight summer dress with elegant design."
  },
  {
    id: 4,
    name: "Women's Handbag",
    category: "female",
    price: 799,
    image: "/images/female/bag-01.jpg",
    description: "Stylish handbag with spacious compartments."
  },
  {
    id: 5,
    name: "Kids' T-Shirt",
    category: "kids",
    price: 199,
    image: "/images/kids/kids-tshirt-01.jpg",
    description: "Durable cotton t-shirt for active kids."
  },
  {
    id: 6,
    name: "Kids' Sneakers",
    category: "kids",
    price: 299,
    image: "/images/kids/kids-shoes-01.jpg",
    description: "Comfortable sneakers perfect for school and play."
  },
  // add more with placeholder images
];

for (let i = 7; i <= 30; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    category: i % 2 === 0 ? "male" : "female",
    price: 100 + i * 10,
    image: "/images/products-placeholder.png",
    description: "Sample description for demo product."
  });
}

export default products;
