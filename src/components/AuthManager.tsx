import { useEffect } from "react";
import supabase from "../liv/supabase.ts";
import { useAuthStore } from "../store/loginStore.ts";

export default function AuthManager() {
	const { setSession } = useAuthStore();

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		// Check initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [setSession]);

	return null;
}
