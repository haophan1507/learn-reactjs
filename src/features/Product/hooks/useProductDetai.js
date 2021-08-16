import productApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const result = await productApi.get(productId);
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    })()
  }, [productId]);

  return { product, loading };
}