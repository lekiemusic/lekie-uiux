import { useQuery } from "@tanstack/react-query";
import fetchTracks from "../../api/trackApi.ts";

export default function PlayerControl() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["jamendo_tracks"],
		queryFn: fetchTracks,
	});

	const currentTrack = data?.[0];

	if (isLoading) return <p>로딩중</p>;
	if (error) return <p>오류 발생: {error.message}</p>;
	if (!currentTrack) return <p>데이터 존재x</p>;

	// 임시 재생 시간
	const currentTime = currentTrack.duration;
	const progress = (currentTime / currentTrack.duration) * 100;

	// 초를 분:초 형식으로 변환
	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	};

	return (
		<div className="space-y-4">
			{/* 재생 진행률 바 */}
			<section className="flex items-center gap-4">
				<span className="text-gray-600 text-sm min-w-12 text-right">
					{formatTime(currentTime)}
				</span>

				<div className="flex-1 relative">
					<div className="w-full h-1 rounded-lg bg-gray-300">
						<div
							className="h-full bg-yellow-500 rounded-lg"
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>

				<span className="text-gray-600 text-sm min-w-12">
					{formatTime(currentTrack.duration)}
				</span>
			</section>

			{/* 컨트롤 버튼 */}
			<section className="flex items-center justify-center gap-6">
				{/* 이전 곡 버튼 */}
				<button className="text-gray-400 hover:text-gray-600 active:scale-90 transition-all duration-200">
					<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
						<path d="M16 18h2V6h-2zm-11-7l8.5-6v12z" />
					</svg>
				</button>

				{/* 재생/일시정지 버튼 */}
				<button className="w-16 h-16 rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 shadow-lg flex items-center justify-center text-white hover:shadow-xl active:scale-95 transition-all duration-200">
					<svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
				</button>

				{/* 다음 곡 버튼 */}
				<button className="text-gray-400 hover:text-gray-600 active:scale-90 transition-all duration-200">
					<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
						<path d="M6 6h2v12H6zm13 6L11 6v12z" />
					</svg>
				</button>
			</section>
		</div>
	);
}
