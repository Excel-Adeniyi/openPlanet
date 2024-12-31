import { create } from "zustand";


export const useScheduleModal = create((set) => ({
    showModal: false,
    toggleModal: () => set((state: any) => ({showModal: !state.showModal}))
}))