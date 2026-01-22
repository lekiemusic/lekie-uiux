import { motion, AnimatePresence } from "motion/react";
import { X, Search, Music, TrendingUp, LogIn, Grid3x3 } from "lucide-react";
import { ReactNode } from "react";


// interface ModalContainerProps {
// 	openModal: ModalType;
// 	isModalExpanded: boolean;
// 	onClose: () => void;
// 	onWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
// 	children: ReactNode;
// }

const modalConfig = {
	login: { icon: LogIn, title: "로그인" },
	search: { icon: Search, title: "노래 검색" },
	playlist: { icon: Music, title: "플레이리스트" },
	genre: { icon: TrendingUp, title: "장르별 인기 노래" },
	category: { icon: Grid3x3, title: "카테고리" },
};

export function ModalContainer() {
	if (!openModal) return null;

	const config = modalConfig[openModal];
	const Icon = config.icon;

	return (
		<AnimatePresence>
			{/* Backdrop */}
			<motion.div
				className="fixed inset-0 bg-black/60 z-40"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
			/>

			{/* Modal */}
			<motion.div
				className="fixed left-0 right-0 z-50 bg-gradient-to-br from-orange-500 to-amber-600 rounded-t-3xl shadow-2xl overflow-hidden mx-4"
				initial={{ y: "100%" }}
				animate={{
					y: 0,
					bottom: "0%",
					height: isModalExpanded ? "90vh" : "60vh",
				}}
				exit={{ y: "100%" }}
				transition={{ type: "spring", damping: 30, stiffness: 300 }}
				onWheel={onWheel}>
				{/* Drag Handle */}
				<div className="flex justify-center py-3">
					<div className="w-12 h-1.5 bg-white/30 rounded-full"></div>
				</div>

				{/* Modal Header */}
				<div className="sticky top-0 bg-gradient-to-r from-orange-600 to-amber-700 px-6 py-4 flex items-center justify-between border-b border-orange-400/30 z-10">
					<h2 className="text-2xl font-bold text-white flex items-center gap-3">
						<Icon size={28} />
						{config.title}
					</h2>
					<motion.button
						onClick={onClose}
						className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
						whileHover={{ scale: 1.1, rotate: 90 }}
						whileTap={{ scale: 0.9 }}>
						<X size={24} />
					</motion.button>
				</div>

				{/* Modal Content */}
				<div
					className={`overflow-y-auto ${isModalExpanded ? "max-h-[calc(90vh-130px)]" : "max-h-[calc(60vh-130px)]"} px-6 py-6`}
					data-scroll-content>
					{children}
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
