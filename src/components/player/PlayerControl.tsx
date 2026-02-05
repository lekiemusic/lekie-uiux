import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useTrackStore } from "../../store/trackStore.ts";
import { useTracks } from "../../hooks/queries/useTracks.ts";

export default function PlayerControl() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const { currentIndex, nextTrack, prevTrack } = useTrackStore();
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const { data, isLoading, error } = useTracks();

	const currentTrack = data?.[currentIndex];

	useEffect(() => {
		if (currentTrack?.audio_url) {
			if (!audioRef.current) {
				audioRef.current = new Audio(currentTrack.audio_url);
			} else {
				audioRef.current.src = currentTrack.audio_url;
			}

			const audio = audioRef.current;
			// 곡이 변경되면 바로 재생 시작 (선택 사항, 여기서는 자동 재생 추가)
			if (isPlaying) {
				audio.play().catch(() => setIsPlaying(false));
			}

			const updateTime = () => setCurrentTime(audio.currentTime);
			const handleEnd = () => {
				if (data) nextTrack(data.length);
			};

			audio.addEventListener("timeupdate", updateTime);
			audio.addEventListener("ended", handleEnd);

			return () => {
				audio.removeEventListener("timeupdate", updateTime);
				audio.removeEventListener("ended", handleEnd);
				audio.pause();
			};
		}
	}, [currentTrack]); // isPlaying을 의존성에서 제외하여 곡 변경 시 자동 재생 유지 여부 결정

	const handleTogglePlay = () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleNext = () => {
		if (!data) return;
		nextTrack(data.length);
	};

	const handlePrev = () => {
		if (!data) return;
		prevTrack(data.length);
	};

	if (isLoading) return <p>로딩중</p>;
	if (error) return <p>오류 발생: {error.message}</p>;
	if (!currentTrack) return <p>데이터 존재x</p>;



	const progress = (currentTime / currentTrack.duration) * 100;

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
							className="h-full bg-yellow-500 rounded-lg transition-all duration-100"
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
				<button
					onClick={handlePrev}
					className="text-gray-400 hover:text-gray-600 active:scale-90 transition-all duration-200"
				>
					<SkipBack size={32} fill="currentColor" />
				</button>

				{/* 재생/일시정지 버튼 */}
				<button
					onClick={handleTogglePlay}
					className="w-16 h-16 rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 shadow-lg flex items-center justify-center text-white hover:shadow-xl active:scale-95 transition-all duration-200"
				>
					{isPlaying ? (
						<Pause size={28} fill="currentColor" />
					) : (
						<Play size={28} fill="currentColor" className="ml-1" />
					)}
				</button>

				{/* 다음 곡 버튼 */}
				<button
					onClick={handleNext}
					className="text-gray-400 hover:text-gray-600 active:scale-90 transition-all duration-200"
				>
					<SkipForward size={32} fill="currentColor" />
				</button>
			</section>
		</div>
	);
}
