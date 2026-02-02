// tap 관리 모달, 탭 클릭 핸들러
import { create } from "zustand";
import { combine } from "zustand/middleware";

export type ModalType =
	| "login"
	| "search"
	| "playlist"
	| "genre"
	| "category"
	| null;

export const MODAL_TYPES: Record<Exclude<ModalType, null>, number> = {
	login: 0,
	search: 1,
	playlist: 2,
	genre: 3,
	category: 4,
};

export const useTapModal = create(
	combine(
		{
			selectedPanel: -1,
			isModalExpanded: false,
		},
		(set) => ({
			onPanelChange: (panelIndex: number) => set({ selectedPanel: panelIndex }),

			openModal: (type: ModalType) => {
				if (type === null) {
					set({ selectedPanel: -1 });
				} else {
					set({ selectedPanel: MODAL_TYPES[type] });
				}
			},

			// onModalExpanded: () => set((state) => ({isModalExpanded: !state.isModalExpanded})),

			onClose: () => set({ selectedPanel: -1, isModalExpanded: false }),
		})
	)
);
