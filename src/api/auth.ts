import supabase from "../liv/supabase.ts";
import type { Provider } from "@supabase/supabase-js";

export async function signOauth(provider: Provider) {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "github",
	});
	if (error) throw error;
	return data;
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
}
