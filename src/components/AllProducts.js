import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/reducers/productsSlice'
import { v4 as uuidv4 } from 'uuid';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts)
  const status = useSelector((state) => state.products.status)

  console.log(allProducts)

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(getAllProducts())
    }
  }, [status, dispatch])

  return (
    <>
      <h1>
        All products
      </h1>
      <ul className="container">
        {allProducts.map((product) => (
          <div className="card" key={uuidv4()}>
            <SingleProduct product={product}/>
          </div>
        ))}
      </ul>
    </>
  )
}

export default AllProducts
