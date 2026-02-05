import { useNavigate } from "react-router-dom";
import { useTapModal, MODAL_TYPES } from "../../store/modalStore";
import { useTrackStore } from "../../store/trackStore";
import { useTracks } from "../../hooks/queries/useTracks";

export default function Player() {
	const selectedPanel = useTapModal((state) => state.selectedPanel);
	const onPanelChange = useTapModal((state) => state.onPanelChange);
	const currentIndex = useTrackStore((state) => state.currentIndex);
	const navigate = useNavigate();

	const { data, isLoading, error } = useTracks();

	const currentTrack = data?.[currentIndex];

	const handlePanelClick = (index: number) => {
		onPanelChange(index);
		navigate(`/${MODAL_TYPES[index]}`);
	};

	if (isLoading) return <p>로딩중</p>;
	if (error) return <p>오류 발생: {error.message}</p>;
	if (!currentTrack) return <p>데이터 존재x</p>;

	return (
		<div className="relative mb-10">
			{/* 패널 버튼 섹션 */}
			<section className="flex gap-5 mb-0 ml-12 relative z-0">
				{MODAL_TYPES.map((type, index) => (
					<button
						key={type}
						onClick={() => handlePanelClick(index)}
						className={`w-10 h-6 rounded-t-lg transition-transform duration-300 ${selectedPanel === index
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

