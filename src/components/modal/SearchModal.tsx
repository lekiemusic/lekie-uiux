import { motion } from "motion/react";
import { Search } from "lucide-react";

const searchResults = [
	{
		id: 1,
		title: "Blinding Lights",
		artist: "The Weeknd",
		album: "After Hours",
		duration: "3:20",
	},
	{
		id: 2,
		title: "Levitating",
		artist: "Dua Lipa",
		album: "Future Nostalgia",
		duration: "3:23",
	},
	{
		id: 3,
		title: "Save Your Tears",
		artist: "The Weeknd",
		album: "After Hours",
		duration: "3:35",
	},
	{
		id: 4,
		title: "Good 4 U",
		artist: "Olivia Rodrigo",
		album: "SOUR",
		duration: "2:58",
	},
];

export function SearchModal() {
	return (
		<div className="space-y-4">
			<div className="relative">
				<input
					type="text"
					placeholder="노래, 아티스트, 앨범 검색..."
					className="w-full px-5 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50"
				/>
				<Search
					className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
					size={20}
				/>
			</div>

			<div className="space-y-2 mt-6">
				<h3 className="text-white/80 text-sm font-medium mb-3">
					검색 결과
				</h3>
				{searchResults.map((song) => (
					<motion.div
						key={song.id}
						className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}>
						<div className="flex items-center justify-between">
							<div className="flex-1">
								<h4 className="text-white font-semibold">{song.title}</h4>
								<p className="text-white/70 text-sm">
									{song.artist} • {song.album}
								</p>
							</div>
							<span className="text-white/60 text-sm">
								{song.duration}
							</span>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}