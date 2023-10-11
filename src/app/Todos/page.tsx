"use client"
import React from 'react'
import { handleModal, handleState, handleHeading, handleIconDelete, setSelectedFilter, handleCheckbox, handleEmpty, handleEditModal, handleEditState, handleEditIndex, handleEditTodos, handleEditHeading, } from '@/redux/features/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
import ProtectedRoute from '../components/ProtectedRoute';
const TodosPage = () => {
  const { isOpenModal, inputText, allTodos, isEditOpenModal, editedText, selectedFilter } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch();
  console.log(allTodos);
  const filterTodos=allTodos.filter((each:any)=>{
    if (selectedFilter==="All"){
      return each;
    }                                          
    else if(selectedFilter==="Completed"){
      return each.isCompleted;
    }
    else {
      return !each.isCompleted
    }
  })

  return (
    <ProtectedRoute>
      <div className="w-5/6 ml-auto mt-20">
        <div className="min-h-screen bg-gray-100 flex justify-center items-start">
          <div className="text-center mt-8">
            <h1 className="text-3xl font-bold mb-6">Todos</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="button"
              onClick={() => dispatch(handleModal(true))}
            >
              Add Task
            </button>
            <div className="relative inline-block ml-3">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => dispatch(setSelectedFilter(e.target.value))}
              >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="NotCompleted">Not Completed</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <RiArrowDropDownLine size={25} />
              </div>
            </div>
            <div>
              {filterTodos.map((each: any) => (
                <div key={each.id} className="bg-white shadow-md rounded-lg p-4 mt-4 flex items-center justify-between gap-3">
                  <input type='checkbox' checked={each.isCompleted} onChange={() => dispatch(handleCheckbox({ id: each.id, isCompleted: !each.isCompleted }))} />
                  <h1 className="text-xl font-semibold">{each.task}</h1>
                  <div className="flex gap-3">
                    <AiTwotoneEdit className="text-blue-500 cursor-pointer" onClick={() => {
                      dispatch(handleEditIndex(each.id))
                      dispatch(handleEditModal(true))
                      dispatch(handleEditHeading(each.task))
                    }} />
                    <AiTwotoneDelete className="text-red-500 cursor-pointer" onClick={() => dispatch(handleIconDelete(each.id))} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <dialog id="my_modal_3" className={`modal ${isOpenModal ? 'modal-open' : 'modal-close'}`}>
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => dispatch(handleModal(false))}
                >
                  ✕
                </button>
              </form>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="font-bold text-lg">Add Task</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Add Tasks"
                    value={inputText}
                    onChange={(e) => dispatch(handleState(e.target.value))}
                    className="border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(handleHeading({ id: Date.now(), task: inputText, isCompleted: false }))
                      dispatch(handleEmpty())
                      dispatch(handleModal(false))
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_3" className={`modal ${isEditOpenModal ? 'modal-open' : 'modal-close'}`}>
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => dispatch(handleEditModal(false))}
                >
                  ✕
                </button>
              </form>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="font-bold text-lg">Edit Task</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Add Tasks"
                    value={editedText}
                    onChange={(e) => dispatch(handleEditState(e.target.value))}
                    className="border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(handleEditTodos())
                      dispatch(handleEditModal(false))
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </ProtectedRoute>
  );
}
export default TodosPage;
