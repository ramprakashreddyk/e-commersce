import Link from 'next/link'
import React from 'react'

const LoginWithOTP = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-80 p-6 bg-white shadow-md rounded-lg">
                <form>
                    <h1 className="text-2xl font-bold mb-4 text-center">Login With OTP</h1>
                    <label className="block mb-2" htmlFor="mobile"></label>
                    <input
                        type="text" 
                        id="mobile"
                        placeholder="Enter your Mobile No"
                        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <button
                        type="button"
                        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-2"
                    >
                        Get OTP
                    </button>
                    <Link href="/Login"
                        type="button"
                        className="w-full py-2 text-center text-black border border-transparent rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:border-gray-300"
                    >
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginWithOTP
