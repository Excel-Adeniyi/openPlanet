import { create } from "zustand";

export const useSidebarStore = create((set) => ({
isOpen: false,
toggleBar: () => set((state: any) => ({isOpen: !state.isOpen}))
}))

