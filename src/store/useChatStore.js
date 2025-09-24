import { create } from "zustand";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],  
    isUserLoading: false,
    isMessagesLoading: false,
    selectedFriend: null,

    getUser: async (email) => {
        set({ isUserLoading: true });
        try {
            const response = await axiosInstence.get(`/messages/users/${email}`);
            const data = await response.data;
            set({ users: data, isUserLoading: false });
        } catch (error) {
            console.error("Error fetching user:", error);
            set({ isUserLoading: false });
        }
    },

    getMessages: async (email) => {
        set({ isMessagesLoading: true });
        try {
            const response = await axiosInstence.get(`/messages/${email}`);
            const data = await response.data;
            set({ messages: data, isMessagesLoading: false });
        } catch (error) {
            console.error("Error fetching messages:", error);
            set({ isMessagesLoading: false });
        }
    },

    setSelectedFriend: (friend) => set({ selectedFriend: friend }),
}));