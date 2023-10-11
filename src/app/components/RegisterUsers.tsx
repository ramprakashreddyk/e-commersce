import React from 'react'

const RegisterUsers = () => {
    const Details = localStorage.getItem("registerDetails")
    const users = Details ? JSON.parse(Details) : [];
    console.log(users);

    return (
        <div className='mt-28 '>
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Registered Users</h1>
            {users.map((each: any) => {
                return (
                    <div className=' '>
                        <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto mt-4">
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold">Name:</h2>
                                <p className="text-gray-700">{each?.firstname} {each?.lastname}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold">Email:</h2>
                                <p className="text-gray-700">{each?.email}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold">Mobile:</h2>
                                <p className="text-gray-700">{each?.mobile}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold">Password:</h2>
                                <p className="text-gray-700">{each?.password}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RegisterUsers;

