import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) =>({
    authUser: null,
    isSigninUp: false,
    islogging: false,
    isAuthChecking: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get(`/auth/check`);
            set({ authUser: res.user });
        } catch (error) {
            console.error("Error checking auth:", error);
            set({ authUser: null });
        } finally {
            set({ isAuthChecking: false });
        }
    }
}));

