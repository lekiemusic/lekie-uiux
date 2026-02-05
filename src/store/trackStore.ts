import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useTrackStore = create(
	combine(
		{
			currentIndex: 0,
		},
		(set) => ({
			setCurrentIndex: (index: number) => set({ currentIndex: index }),

			nextTrack: (totalTracks: number) =>
				set((state) => ({
					currentIndex: (state.currentIndex + 1) % totalTracks,
				})),

			prevTrack: (totalTracks: number) =>
				set((state) => ({
					currentIndex: (state.currentIndex - 1 + totalTracks) % totalTracks,
				})),
		})
	)
);
