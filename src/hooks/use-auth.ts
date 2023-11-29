import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStore {
  user: any;
  token: string | null;
  clear: () => void;
  setToken: (token: string) => void;
}

const useAuth = create(
  persist<AuthStore>(
    (set, get) => ({
      user: null,
      token: null,
      clear: () => set({ user: null, token: null }),
      setToken: (token: string) => {
        set({ token });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
