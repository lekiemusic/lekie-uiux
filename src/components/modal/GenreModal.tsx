import { motion } from "motion/react";
import { Music } from "lucide-react";

const genreSongs = [
	{ id: 1, title: "Industry Baby", artist: "Lil Nas X", genre: "Hip-Hop", plays: "2.1M" },
	{ id: 2, title: "Heat Waves", artist: "Glass Animals", genre: "Alternative", plays: "1.8M" },
	{ id: 3, title: "Stay", artist: "The Kid LAROI", genre: "Pop", plays: "2.5M" },
	{ id: 4, title: "Shivers", artist: "Ed Sheeran", genre: "Pop", plays: "1.9M" },
];

export function GenreModal() {
	return (
		<div className="space-y-3">
			{genreSongs.map((song, index) => (
				<motion.div
					key={song.id}
					className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: index * 0.1 }}
					whileHover={{ scale: 1.02 }}
				>
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
							<Music size={24} className="text-white" />
						</div>
						<div className="flex-1">
							<h4 className="text-white font-semibold">{song.title}</h4>
							<p className="text-white/70 text-sm">
								{song.artist} • {song.genre}
							</p>
						</div>
						<div className="text-right">
							<span className="text-white/60 text-sm">{song.plays}</span>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}