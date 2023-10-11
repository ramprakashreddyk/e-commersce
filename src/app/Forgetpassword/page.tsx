import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-80 p-6 bg-white shadow-md rounded-lg">
                <form>
                    <h1 className="text-2xl font-bold mb-4 text-center">Reset your password</h1>
                    <p className="text-gray-600 mb-4 text-center">We will send you an email to reset your password</p>
                    <label className="block mb-2" htmlFor="email">Enter your email</label>
                    <input
                        type="search"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <button
                        type="button"
                        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-2"
                    >
                        Submit
                    </button>
                    <Link href="/Login"
                        type="button"
                        className="w-full text-center py-2 text-black border border-transparent rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:border-gray-300"
                    >
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
