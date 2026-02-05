import { motion } from "motion/react";

const categories = [
	{ id: 1, name: "Pop", description: "최신 팝 히트곡", color: "from-pink-500 to-rose-500", emoji: "🎤" },
	{ id: 2, name: "Hip-Hop", description: "힙합 & 랩", color: "from-purple-600 to-indigo-600", emoji: "🎧" },
	{ id: 3, name: "Rock", description: "록 음악", color: "from-red-600 to-orange-600", emoji: "🎸" },
	{ id: 4, name: "Jazz", description: "재즈 & 블루스", color: "from-blue-600 to-cyan-600", emoji: "🎺" },
	{ id: 5, name: "Classical", description: "클래식", color: "from-amber-600 to-yellow-600", emoji: "🎻" },
	{ id: 6, name: "Electronic", description: "EDM & 일렉트로닉", color: "from-green-600 to-emerald-600", emoji: "🎹" },
	{ id: 7, name: "K-Pop", description: "K-팝", color: "from-fuchsia-600 to-pink-600", emoji: "💜" },
	{ id: 8, name: "Indie", description: "인디 & 얼터너티브", color: "from-teal-600 to-cyan-600", emoji: "🌟" },
	{ id: 9, name: "R&B", description: "R&B & 소울", color: "from-violet-600 to-purple-600", emoji: "💎" },
	{ id: 10, name: "Latin", description: "라틴 음악", color: "from-orange-600 to-red-600", emoji: "🔥" },
	{ id: 11, name: "Country", description: "컨트리", color: "from-yellow-700 to-amber-700", emoji: "🤠" },
	{ id: 12, name: "Chill", description: "편안한 음악", color: "from-sky-500 to-blue-500", emoji: "☁️" },
];

export function CategoryModal() {
	return (
		<div className="grid grid-cols-2 gap-3">
			{categories.map((category, index) => (
				<motion.div
					key={category.id}
					className={`bg-gradient-to-br ${category.color} rounded-2xl p-5 cursor-pointer shadow-lg relative overflow-hidden`}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: index * 0.05 }}
					whileHover={{ scale: 1.05, y: -5 }}
					whileTap={{ scale: 0.95 }}
				>
					<div className="relative z-10">
						<div className="text-4xl mb-2">{category.emoji}</div>
						<h3 className="text-white font-bold text-xl mb-1">{category.name}</h3>
						<p className="text-white/80 text-sm">{category.description}</p>
					</div>
					<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
				</motion.div>
			))}
		</div>
	);
}