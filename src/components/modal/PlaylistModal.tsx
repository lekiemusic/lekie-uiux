import { motion } from "motion/react";
import { Play } from "lucide-react";

const playlists = [
	{ id: 1, name: "Chill Vibes", count: 42, color: "from-purple-500 to-pink-500" },
	{ id: 2, name: "Workout Mix", count: 28, color: "from-red-500 to-orange-500" },
	{ id: 3, name: "Focus Flow", count: 35, color: "from-blue-500 to-cyan-500" },
	{ id: 4, name: "Party Hits", count: 50, color: "from-green-500 to-teal-500" },
];

export function PlaylistModal() {
	return (
		<div className="grid grid-cols-2 gap-4">
			{playlists.map((playlist) => (
				<motion.div
					key={playlist.id}
					className={`bg-gradient-to-br ${playlist.color} rounded-xl p-6 cursor-pointer shadow-lg`}
					whileHover={{ scale: 1.05, y: -5 }}
					whileTap={{ scale: 0.95 }}
				>
					<div className="h-32 flex flex-col justify-between">
						<div>
							<h3 className="text-white font-bold text-lg mb-1">{playlist.name}</h3>
							<p className="text-white/80 text-sm">{playlist.count}곡</p>
						</div>
						<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
							<Play size={20} className="text-white ml-0.5" fill="white" />
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}