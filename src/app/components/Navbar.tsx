"use client";
import { AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux/";
import { printingValue, setCurrentUser,settingRegisterUser } from "@/redux/features/auth-slice";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify"
const Navbar = () => {
  const router=useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { value } = useSelector((store: any) => store.auth);
  const usersJSON = localStorage.getItem('currentUser');
  const currentUser = usersJSON ? JSON.parse(usersJSON) : [];
  const handleLogout=()=>{
    dispatch(settingRegisterUser());
    dispatch(setCurrentUser(null))
    toast.success("Logout success")
    router.push("/Login")
  }
console.log(currentUser);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <h1 className="text-white">Welcome {currentUser?.firstname}</h1>
      <button type="button" onClick={handleLogout} className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Logout</button>
    </div>
    </div>
  );
};

export default Navbar;
