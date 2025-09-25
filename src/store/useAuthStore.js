import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) =>({
    authUser: null,
    isSigninUp: false,
    islogging: false,
    isAuthChecking: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get(`/auth/check`);
            const data = await res.data;
            console.log("Auth checking response:", data);
            set({ authUser: data });
        } catch (error) {
            console.log("Auth check failed:", error);
            set({ authUser: null });
        } finally {
            set({ isAuthChecking: false });
        }
    }
}));

