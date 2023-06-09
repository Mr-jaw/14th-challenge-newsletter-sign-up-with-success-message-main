import { create } from "zustand";

interface EmailStore {
  email: string;
  setEmail: (email: string) => void;
}

const useEmail = create<EmailStore>((set) => ({
  email: "",
  setEmail: (email) => set(() => ({ email: email })),
}));

export default useEmail;
