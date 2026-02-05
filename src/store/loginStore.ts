import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { Session } from "@supabase/supabase-js";

export const useAuthStore = create(
	combine(
		{
			session: null as Session | null,
			isLoading: true,
		},
		(set) => ({
			setSession: (session: Session | null) => set({ session, isLoading: false }),
			clearSession: () => set({ session: null, isLoading: false }),
		})
	)
);
