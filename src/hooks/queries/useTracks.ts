import { useQuery } from "@tanstack/react-query";
import fetchTracks from "../../api/trackApi";

export const useTracks = () => {
	return useQuery({
		queryKey: ["jamendo_tracks"],
		queryFn: fetchTracks,
		staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시 유지 (선택 사항)
	});
};
