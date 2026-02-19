
import ProductsPage from '@/components/ProductsPage'

export const metadata = {
  title: "Solar Panels & Solar Products",
  description: "Explore high-quality solar panels and energy products supplied and installed by SunStark Solar. Premium solutions for homes and businesses.",
  alternates: {
    canonical: "https://www.sunstarksolar.com/products",
  },
  openGraph: {
    title: "Solar Panels & Solar Products",
    description: "Explore high-quality solar panels and energy products supplied and installed by SunStark Solar. Premium solutions for homes and businesses.",
    url: "https://www.sunstarksolar.com/products",
  },
};


export default function Products() {

  return (
    <ProductsPage />
  )
}
