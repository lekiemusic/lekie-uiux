import { mockTracks } from "../data/mock";
import type { PlayerProps } from "../types/PropsTypes.ts";

export default function Player({
	selectedPanel,
	onPanelChange,
	currentTrackId,
}: PlayerProps) {
	const currentTrack = mockTracks.find((track) => track.id === currentTrackId);

	if (!currentTrack) {
		return (
			<div>
				요청하신 트랙 정보를 찾을 수 없습니다.
				<br />
				삭제되었거나 주소가 올바르지 않습니다.
			</div>
		);
	}

	return (
		<div className="relative mb-10">
			{/* 패널 버튼 섹션 */}
			<section className="flex gap-5 mb-0 ml-12 relative z-0">
				{[0, 1, 2, 3, 4].map((index) => (
					<button
						key={index}
						onClick={() => onPanelChange(index)}
						className={`w-10 h-6 rounded-t-lg transition-transform duration-300 ${
							selectedPanel === index
								? "bg-linear-to-br from-yellow-400 to-orange-500 translate-y-2"
								: "bg-gray-900"
						}`}
					/>
				))}
			</section>

			{/* 카세트 플레이어 섹션 */}
			<section className="flex h-100 shadow-2xl relative z-10">
				{/* 트랙 이미지 */}
				<div className="flex-3 bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
					<img
						src={currentTrack.image_url}
						alt="track_image"
						className="w-56 h-56 rounded-full object-cover"
					/>
				</div>

				{/* 곡 제목 & 아티스트 이름 */}
				<div className="flex-1 bg-black flex items-start justify-start p-5 relative overflow-hidden">
					<div className="relative z-10">
						<h2 className="text-white text-2xl font-bold leading-tight">
							{currentTrack.title}
						</h2>
						<h4 className="text-white text-sm mt-2 font-semibold leading-tight">
							{currentTrack.artist_name}
						</h4>
						<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
					</div>
				</div>
			</section>
		</div>
	);
}
