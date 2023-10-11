"use client"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

type InitialState = {
    registerInfo: any;
    loginInfo: any;
    users: any;
    currentUser: any;
    allProducts: any
    count: number;
    isOpenModal: boolean;
    isEditOpenModal: boolean;
    inputText: any;
    allTodos: any;
    editedText: any;
    editedIndex: any;
    selectedFilter: string;
    filterProducts: string;
}
const storedUsers = localStorage.getItem("registerDetails");
const storedCurrentUser = localStorage.getItem("currentUser");
const initialState: InitialState = {
    registerInfo:
    {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
        isAdmin: false,
        cart: []
    },
    loginInfo: {
        email: "",
        password: "",
    },
    users: storedUsers ? JSON.parse(storedUsers) : [],
    currentUser: storedCurrentUser ? JSON.parse(storedCurrentUser) : null,
    allProducts: [],
    count: 0,
    isOpenModal: false,
    inputText: "",
    allTodos: [],
    isEditOpenModal: false,
    editedText: "",
    editedIndex: "",
    selectedFilter: "All",
    filterProducts: ""
};
export const getProducts = createAsyncThunk("product/getProducts", async (userData, thunkAPI) => {
    try {
        const response = await axios.get("https://api.pujakaitem.com/api/products")
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        printingValue: (state, action: PayloadAction<string>) => {
            state.registerInfo = action.payload;
        },
        registerUser: (state, action) => {
            state.registerInfo = {
                ...state.registerInfo,
                [action.payload.target.name]: action.payload.target.value,
            };

        },
        loginUser: (state, action) => {
            state.loginInfo = {
                ...state.loginInfo,
                [action.payload.target.name]: action.payload.target.value,
            };
        },
        setUsers: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem("registerDetails", JSON.stringify(state.users));
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
        setIsAdmin: (state, action) => {
            state.registerInfo.isAdmin = action.payload;
            localStorage.setItem(
                "registerDetails",
                JSON.stringify(state.users)
            );
        },
        setCart: (state, action) => {
            const user = state.currentUser.cart.find((user: any) => user.id === action.payload.id)
            if (!user) {
                state.currentUser.cart.push(action.payload)
                localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
                toast.success("Item added to cart")
            }
            else {
                toast.info("Item already in cart")
            }

        },
        settingRegisterUser: (state) => {
            const currentUserIndex = state.users.findIndex((user: any) => {
                return user.email === state.currentUser?.email && user.password === state.currentUser?.password;
            });
            state.users[currentUserIndex] = state.currentUser
            localStorage.setItem("registerDetails", JSON.stringify(state.users));

        },
        setIncrease: (state) => {
            state.count += 1
        },
        setDecrease: (state) => {
            state.count -= 1
        },
        handleDelete: (state, action) => {
            const filterDetails = state.currentUser.cart.filter((each: any) => (
                each.id !== action.payload
            ))
            state.currentUser.cart = filterDetails
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
        deleteAll: (state) => {
            state.currentUser.cart = []
        },
        handleModal: (state, action) => {
            state.isOpenModal = action.payload
        },
        handleEditModal: (state, action) => {
            state.isEditOpenModal = action.payload
        },
        handleState: (state, action) => {
            state.inputText = action.payload
        },
        handleHeading: (state, action) => {
            state.allTodos.push(action.payload)
        },
        handleEditState: (state, action) => {
            state.editedText = action.payload
        },
        handleEditIndex: (state, action) => {
            state.editedIndex = action.payload
        },
        handleEditHeading: (state, action) => {
            state.editedText = action.payload
        },
        handleIconDelete: (state, action) => {
            state.allTodos = state.allTodos.filter((each: any) => {
                return (
                    each.id !== action.payload
                )
            })
        },
        handleEmpty: (state) => {
            state.inputText = ""
        },
        handleEditTodos: (state) => {
            const todoEdit = state.allTodos.find((each: any) => {
                return (
                    each.id === state.editedIndex
                )
            })
            if (todoEdit) {
                todoEdit.task = state.editedText
            }
        },
        handleCheckbox: (state, action) => {
            // const updatedTask=state.allTodos.map((each:any)=>{
            //     return(
            //         each.id===action.payload.id?{...each,isCompleted:action.payload.isCompleted}:each
            //     )
            // })
            // state.allTodos=updatedTask
            const todo = state.allTodos.find((each: any) =>
                each.id === action.payload.id
            );

            if (todo) {
                todo.isCompleted = action.payload.isCompleted;
            }

        },
        setSelectedFilter: (state, action) => {
            state.selectedFilter = action.payload
        },
        handleFilterProducts: (state, action) => {
            state.filterProducts = action.payload; // Corrected typo from 'fliterProducts' to 'filterProducts'
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));

        })
    }
});

export const {
    printingValue,
    registerUser,
    loginUser,
    setUsers,
    setSelectedFilter,
    setCurrentUser,
    setIsAdmin,
    handleEditState,
    handleFilterProducts,
    setCart,
    settingRegisterUser,
    setIncrease,
    setDecrease,
    handleDelete,
    handleEditTodos,
    deleteAll,
    handleModal,
    handleEditModal,
    handleState,
    handleHeading,
    handleIconDelete,
    handleCheckbox,
    handleEditIndex,
    handleEmpty, handleEditHeading
} = authSlice.actions;

export default authSlice.reducer;
