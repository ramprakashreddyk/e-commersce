"use client"
import React from 'react'
import { getProducts, handleFilterProducts } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Link from 'next/link';
import ProtectedRoute from '../components/ProtectedRoute';
const ProductsPage = () => {
  const dispatch = useDispatch();
  const { allProducts, filterProducts } = useSelector((state: any) => state.auth)
  console.log(allProducts);
  const filterDetails = allProducts.filter((each: any) => {
    return (
      each.name.includes(filterProducts)
    )
  })
  console.log(filterProducts, "value");
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <ProtectedRoute>
      <div className="w-5/6 ml-auto mt-[80px] flex justify-center items-center">
        <input
          type="search"
          placeholder="Search products"
          value={filterProducts} // Assuming filterProducts is the value you want to display
          onChange={(e) => dispatch(handleFilterProducts(e.target.value))}

          className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="w-5/6 ml-auto mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterDetails?.map((each: any, index: number) => {
          return (
            <Link href={`/Products/${each.id}`}
              key={index}
              className="bg-white shadow-md p-4 cursor-pointer rounded-lg mt-3 transition-transform hover:scale-105 hover:shadow-lg"
            >
              <h1 className="text-xl font-semibold">{each?.name}</h1>
              <h3 className="text-lg text-gray-600">{each?.company}</h3>
              <img src={each?.image} alt="mobile" className="w-full h-auto mt-4 mb-2" />
              <h3 className="text-lg text-gray-600">Price: Rs{each?.price}</h3>
            </Link>
          );
        })}
      </div>
    </ProtectedRoute>
  )
}

export default ProductsPage;