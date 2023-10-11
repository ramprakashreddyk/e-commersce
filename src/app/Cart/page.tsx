"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { setIncrease, setDecrease, handleDelete, deleteAll } from '@/redux/features/auth-slice'
import ProtectedRoute from '../components/ProtectedRoute'

const CartPage = () => {
  const dispatch = useDispatch();
  const { currentUser, count } = useSelector((state: any) => state.auth)
  console.log(currentUser);
  return (
    <ProtectedRoute>
      <div>
        {currentUser?.cart?.map((each: any) => {
          return (
            <div className="w-5/6 ml-auto mt-[80px] flex items-center pl-3 justify-between border-b border-gray-300 pb-4">
              <div className="flex items-center">
                <img src={each.image} alt={each.name} className="w-20 h-20 object-contain" />
                <div className="ml-4">
                  <h1 className="text-lg font-semibold">{each.name}</h1>
                  <p className="text-gray-600">${each.price}</p>
                </div>
              </div>
                                                                                                                                         
              <div className="flex items-center">
                <button onClick={() => count > 0 ? dispatch(setDecrease()) : null} className="text-red-600">
                  <AiOutlineMinus />
                </button>
                <p className="mx-2">{count}</p>
                <button onClick={() => dispatch(setIncrease())} className="text-green-600">
                  <AiOutlinePlus />
                </button>
              </div>
              <p className='text-red-500 pr-5 cursor-pointer' onClick={() => dispatch(handleDelete(each.id))}>delete Item</p>
            </div>
          )
        })}
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={() => dispatch(deleteAll())}
            className="bg-red-500 hover:bg-red-600 text-white mt-3 font-semibold py-2 px-6 rounded-lg"
          >
            Delete all
          </button>
        </div>
      </div>
    </ProtectedRoute>
  )
}
export default CartPage;
