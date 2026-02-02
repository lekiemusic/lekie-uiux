import Player from "../components/player/Player";
import PlayerControl from "../components/player/PlayerControl";
import { Outlet } from "react-router-dom";

export default function MainPage() {
	return (
		<div className="min-h-screen bg-white-900 text-white flex flex-col items-center justify-center p-8">
			<div className="w-full max-w-xl">
				<Player />
				<PlayerControl />
				<Outlet />
			</div>
		</div>
	);
}
