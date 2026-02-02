import Player from "../components/player/Player.tsx";
import PlayerControl from "../components/player/PlayerControl.tsx";
import { LoginModal } from "../components/modal/LoginModal.tsx";
import { useTapModal } from "../store/modalStore.ts";
import { ModalContainer } from "../components/modal/ModalContainer.tsx";

export default function MainPage() {
	const selectPanel = useTapModal((state) => state.selectedPanel);
	const renderModalContent = () => {
		switch (selectPanel) {
			case 0:
				return <LoginModal />;
			case 1:
				return <div>검색 :곧 구현할 예정</div>;
			case 2:
				return <div>플레이리스트 :곧 구현할 예정</div>;
			case 3:
				return <div>장르별 인기곡 :곧 구현할 예정</div>;
			case 4:
				return <div>카테고리 :곧 구현할 예정</div>;
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
			<div className="w-full max-w-xl">
				<Player />
				<PlayerControl />
				<ModalContainer>{renderModalContent()}</ModalContainer>
			</div>
		</div>
	);
}
