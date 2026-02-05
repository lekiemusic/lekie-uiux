import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/loginStore";
import supabase from "../lib/supabase";

interface SessionProviderProps {
	children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
	const setSession = useAuthStore((state) => state.setSession);
	const isInitialized = useRef(false);

	useEffect(() => {
		if (isInitialized.current) return;
		isInitialized.current = true;

		// 1. 초기 세션 확인
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		// 2. 인증 상태 변화 구독
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		// 클린업: 구독 해제
		return () => {
			subscription.unsubscribe();
		};
	}, [setSession]);

	return <>{children}</>;
};