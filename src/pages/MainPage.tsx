import { useState } from "react";
import Player from "../components/Player";
import PlayerControl from "../components/PlayerControl";

export default function MainPage() {
	const [selectedPanel, setSelectedPanel] = useState(0);
	const [currentTrackId, setCurrentTrackId] = useState("2289481");

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
			<div className="w-full max-w-xl">
				<Player
					selectedPanel={selectedPanel}
					onPanelChange={setSelectedPanel}
					currentTrackId={currentTrackId}
				/>
				<PlayerControl currentTrackId={currentTrackId} />
			</div>
		</div>
	);
}
