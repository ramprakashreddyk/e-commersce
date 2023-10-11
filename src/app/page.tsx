"use client";
import { AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux/";
import { printingValue, setCurrentUser } from "@/redux/features/auth-slice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"
import RegisterUsers from "./components/RegisterUsers";
const Home = () => {

  const usersJSON = localStorage.getItem('currentUser');
  const currentUser = usersJSON ? JSON.parse(usersJSON) : [];


  return (
    <div className="w-5/6 ml-auto">
      {currentUser?.isAdmin ? <RegisterUsers /> : null}
    </div>
  );
};

export default Home;
