// ProtectedRoute.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    // Check if the user is authenticated (example, using a token)
    console.log(localStorage.getItem("currentUser"));
    
    const isAuthenticated = localStorage.getItem("currentUser") != "null";
    console.log(isAuthenticated, "auth");
    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect the user to the login page
            router.push('/Login');
        }
    }, [isAuthenticated, router]);
    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
