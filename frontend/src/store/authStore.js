import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isAuth: !!localStorage.getItem("user-token"),
    loginAuth:(token)=>{
        localStorage.setItem("user-token", token)
        set({isAuth: true})
    },
    logoutAuth: ()=>{
        localStorage.removeItem("user-token")
        set({isAuth: false})
    }
}))

export default useAuthStore