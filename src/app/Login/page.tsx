"use client"
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '@/redux/features/auth-slice'
import { setCurrentUser } from '@/redux/features/auth-slice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const loginPage = () => {
    const router = useRouter()
    const { loginInfo, currentUser } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch();
    const usersJSON = localStorage.getItem('registerDetails');
    const users = usersJSON ? JSON.parse(usersJSON) : [];
    const handleLogin = () => {
        const user = users.find((user: any) => user.email === loginInfo.email)
        if (!user || user.password !== loginInfo.password) {
            toast.error("Invalid username or password")
        }
        else {
            localStorage.setItem("loginDetails", JSON.stringify(loginInfo))
            dispatch(setCurrentUser(user));
            toast.success("User logged in success")
            router.push("/")
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-80 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <form>
                    <label className="block mb-2" htmlFor="email">Your email</label>
                    <input
                        type="search"
                        id="email"
                        name="email"
                        value={loginInfo.email}
                        onChange={(e: any) => dispatch(loginUser(e))}
                        placeholder="Enter your email"
                        className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginInfo.password}
                        onChange={(e: any) => dispatch(loginUser(e))}

                        placeholder="Enter your password"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <div className="flex justify-between mb-4">
                        <Link href="/Forgetpassword" className="text-blue-500">Forgot password</Link>
                        <Link href="/Loginwithotp" className="text-blue-500">Login with OTP</Link>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
                        >
                            Login
                        </button>
                        <Link href="/Register"
                            type="button"
                            className="flex-1 py-2 text-center bg-pink-200 text-black rounded-lg hover:bg-pink-300 focus:outline-none focus:ring focus:border-pink-300 ml-2"
                        >
                            Sign up
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <FcGoogle class="mr-2 text-blue-500" />
                        <p>Continue with Google</p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default loginPage
