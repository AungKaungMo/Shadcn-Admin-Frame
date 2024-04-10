import { create } from "zustand";

interface sidebarToggle {
  toggleCollapse: boolean;
  settingToggleCollapse: () => void;
}

export const useSidebarToggle = create<sidebarToggle>((set, get) => ({
  toggleCollapse: false,
  settingToggleCollapse: () => set({ toggleCollapse: !get().toggleCollapse }),
}));
