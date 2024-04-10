import { create } from "zustand";
import { storage } from "@/service/storage";

interface AuthState {
  user: {
    email: string;
    token: string;
  };
  setUser: (user: Partial<AuthState["user"]>) => void;
  getUser: () => string | null;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: {
    email: "",
    token: "",
  },
  setUser: (user) => {
    if (user?.token) {
      storage().setItem("token", user.token);
    }
    set((state) => ({
      user: { ...state.user, user },
    }));
  },
  getUser: () => storage().getItem("token") ?? null,
}));
