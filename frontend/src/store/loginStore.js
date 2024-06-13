import { create } from 'zustand'

const useLoginStore = create((set) => ({
    isLogin: true,
    setIsLogin: () => set((state) => ({isLogin:!state.isLogin })),
}))

export default useLoginStore;