import Player from "../components/player/Player.tsx";
import PlayerControl from "../components/player/PlayerControl.tsx";
import { LoginModal } from "../components/modal/LoginModal.tsx";
import { useTapModal } from "../store/modalStore.ts";
import { ModalContainer } from "../components/modal/ModalContainer.tsx";
import { useAuthStore } from "../store/loginStore.ts";
import { useSignOut } from "../hooks/mutations/auth.ts";

export default function MainPage() {
	const { selectedPanel, onPanelChange } = useTapModal();
	const { session, isLoading } = useAuthStore();
	const { mutate: signOut } = useSignOut();

	const renderModalContent = () => {
		switch (selectedPanel) {
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

	const handleLoginClick = () => {
		onPanelChange(0); // Open the login modal
	};

	const handleLogoutClick = () => {
		signOut();
	};

	return (
		<div className="min-h-screen bg-white-900 text-white flex flex-col items-center justify-center p-8">
			<div className="w-full max-w-xl">
				<header className="flex justify-between items-center mb-4">
					{!isLoading && (
						<div>
							{session ? (
								<div className="flex items-center gap-4">
									<p>{session.user.email}</p>
									<button
										onClick={handleLogoutClick}
										className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
									>
										Logout
									</button>
								</div>
							) : (
								<button
									onClick={handleLoginClick}
									className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
								>
									Login
								</button>
							)}
						</div>
					)}
				</header>
				<Player />
				<PlayerControl />
				<ModalContainer>{renderModalContent()}</ModalContainer>
			</div>
		</div>
	);
}
