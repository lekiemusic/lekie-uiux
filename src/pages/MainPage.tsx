import Player from "../components/player/Player.tsx";
import PlayerControl from "../components/player/PlayerControl.tsx";
import { LoginModal } from "../components/modal/LoginModal.tsx";
import { useTapModal } from "../store/modalStore.ts";
import { motion } from "motion/react";

export default function MainPage() {
	const selectPanel = useTapModal((state) => state.selectedPanel);

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
			<div className="w-full max-w-xl">
				<Player />
				<PlayerControl />
				{selectPanel === 0 && (
					<motion.div
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.25, ease: "easeOut" }}>
						<LoginModal />
					</motion.div>
				)}
			</div>
		</div>
	);
}
