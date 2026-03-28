import HeroSlider from '../../component/HeroSlider'
import './home.css'
import SlideProduct from '../../component/slideProduct/SlideProduct'
import { useState, useEffect } from "react";
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "mens-watches",
  "sunglasses",
]
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(categories.map(async (category) => {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`)
          const data = await res.json()
          return { [category]: data.products }
        }))
        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])
  return (
    <div>
      <HeroSlider />
      {loading ? (<p>Loading... </p>) : (categories.map((category) => (
        <SlideProduct key={category} title={category.replace("-", " ")} data={products[category]} />
      ),))}

    </div>
  )
}

export default Home
