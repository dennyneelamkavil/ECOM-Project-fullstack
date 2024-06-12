import { create } from 'zustand';

export const useIsLogin = create((set) => ({
    isLogin: true,
    setIsLogin: () => set((state) => ({ isLogin:false })),
}));
