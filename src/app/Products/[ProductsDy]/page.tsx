"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { getProducts, setCart } from '@/redux/features/auth-slice'
import ProtectedRoute from '@/app/components/ProtectedRoute'
const SingleProductPage = () => {
    const dispatch = useDispatch()
    const { allProducts } = useSelector((state: any) => state.auth)
    const { ProductsDy } = useParams()
    const singleProduct = allProducts.filter((each: any) => {
        return (
            each.id == ProductsDy
        )
    });

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <ProtectedRoute>
            <div className="w-5/6 ml-auto mt-[80px]">
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-md w-96">
                        <div className="text-center">
                            <img
                                src={singleProduct[0]?.image}
                                alt="Product"
                                className="w-48 h-auto mx-auto rounded-lg"
                            />
                        </div>
                        <h1 className="text-3xl font-semibold text-gray-900 mt-4">
                            {singleProduct[0]?.name}
                        </h1>
                        <h3 className="text-lg text-gray-700 mt-2">{singleProduct[0]?.company}</h3>
                        <p className="text-gray-700 mt-2">{singleProduct[0]?.description}</p>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Price: ${singleProduct[0]?.price}
                            </h3>
                            <div className='mt-3'>
                                <Link href="/Cart" onClick={() => dispatch(setCart(singleProduct[0]))} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </ProtectedRoute>
    )
}

export default SingleProductPage