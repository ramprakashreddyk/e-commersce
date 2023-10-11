"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { registerUser, setIsAdmin } from '@/redux/features/auth-slice'
import { toast } from 'react-toastify'
import { setUsers } from '@/redux/features/auth-slice'
import { useRouter } from 'next/navigation'
const registerForm = () => {
    const router = useRouter()
    const { registerInfo, users } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch();
    const handleRegister = () => {
        if (registerInfo.email !== "" && registerInfo.password !== "") {
            dispatch(setUsers(registerInfo))
            toast.success("user registered successfully")
            router.push("/Login")
        }
        else {
            toast.error("Please enter the details")
        }
    };
    console.log(registerInfo);

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-80 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                <input
                    type="text"
                    value={registerInfo.firstname}
                    onChange={(e: any) => dispatch(registerUser(e))}
                    name="firstname"
                    placeholder="Enter your firstname"
                    className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="text"
                    name="lastname"
                    value={registerInfo.lastname}
                    onChange={(e: any) => dispatch(registerUser(e))}
                    placeholder="Enter your lastname"
                    className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="text"
                    value={registerInfo.mobile}
                    onChange={(e: any) => dispatch(registerUser(e))}
                    name="mobile"
                    placeholder="Enter your Phone No"
                    className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="email"
                    value={registerInfo.email}
                    onChange={(e: any) => dispatch(registerUser(e))}
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="password"
                    value={registerInfo.password}
                    onChange={(e: any) => dispatch(registerUser(e))}
                    name="password"
                    placeholder="Enter your Password"
                    className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <div className="mb-2">
                    <label className="block mb-2" htmlFor="isAdmin">
                        Are you an admin?
                    </label>
                    <input
                        type="checkbox"
                        id="isAdmin"
                        name="isAdmin"
                        checked={registerInfo.isAdmin}
                        onChange={(e: any) => dispatch(setIsAdmin(!registerInfo.isAdmin))}
                        className="mr-2"
                    />
                    <span className="text-gray-700">Yes, I am an admin</span>
                </div>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={handleRegister}
                        className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Register
                    </button>
                    <Link href="/Login"
                        type="button"
                        className="flex-1 py-2 text-center bg-pink-200 text-black rounded-lg hover:bg-pink-300 focus:outline-none focus:ring focus:border-pink-300"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>

    )
}

export default registerForm;