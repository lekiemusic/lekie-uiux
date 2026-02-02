import { useMutation } from "@tanstack/react-query";
import { signOauth, signOut } from "../../api/auth.ts";

export function useOauth() {
	return useMutation({
		mutationFn: signOauth,
	});
}

export function useSignOut() {
	return useMutation({
		mutationFn: signOut,
	});
}
