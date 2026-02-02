import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { Session } from "@supabase/supabase-js";
import supabase from "../liv/supabase";

export const useAuthStore = create(
	combine(
		{
			session: null as Session | null,
			isLoading: true,
			isInitialized: false,
		},
		(set, get) => ({
			setSession: (session: Session | null) => set({ session, isLoading: false }),
			clearSession: () => set({ session: null, isLoading: false }),

			// Supabase 인증 상태 초기화 및 구독 설정
			initializeAuth: () => {
				// 이미 초기화되었으면 중복 실행 방지
				if (get().isInitialized) return;

				set({ isInitialized: true });

				// 1. Supabase 인증 상태 변화 구독
				const {
					data: { subscription },
				} = supabase.auth.onAuthStateChange((_event, session) => {
					set({ session, isLoading: false });
				});

				// 2. 초기 세션 확인
				supabase.auth.getSession().then(({ data: { session } }) => {
					set({ session, isLoading: false });
				});

				// 구독 해제 함수 반환 (필요시 사용)
				return () => subscription.unsubscribe();
			},
		})
	)
);

// 스토어 생성 시 자동으로 인증 초기화 실행
// 이렇게 하면 앱 시작 시 자동으로 Supabase 세션을 확인하고 구독을 설정합니다.
useAuthStore.getState().initializeAuth();