import { create } from "zustand";
import { combine } from "zustand/middleware";

export type ModalType = "login" | "search" | "playlist" | "genre" | "category";

export const MODAL_TYPES: ModalType[] = ["login", "search", "playlist", "genre", "category"];

export const useTapModal = create(
	combine(
		{
			selectedPanel: -1,
			isModalExpanded: false,
		},
		(set) => ({
			onPanelChange: (panelIndex: number) => set({ selectedPanel: panelIndex }),
			openModal: (type: ModalType | null) => {
				if (type === null) {
					set({ selectedPanel: -1 });
				} else {
					set({ selectedPanel: MODAL_TYPES.indexOf(type) });
				}
			},
			onClose: () => set({ selectedPanel: -1, isModalExpanded: false }),
			setExpanded: (expanded: boolean) => set({ isModalExpanded: expanded }),
		})
	)
);
