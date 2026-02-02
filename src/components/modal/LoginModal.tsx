import { motion } from "motion/react";
import { LogIn, LogOut, Github, User as UserIcon } from "lucide-react";
import { useOauth, useSignOut } from "../../hooks/mutations/auth";
import { useAuthStore } from "../../store/loginStore";

export function LoginModal() {
	const { session } = useAuthStore();
	const { mutate: signInWithOauth } = useOauth();
	const { mutate: signOut } = useSignOut();

	const handleSignOauth = () => {
		signInWithOauth("github");
	};

	const handleLogout = () => {
		signOut();
	};

	// 로그인된 상태: 사용자 정보 표시
	if (session) {
		const user = session.user;
		const avatarUrl = user.user_metadata?.avatar_url;
		const fullName = user.user_metadata?.full_name || user.email;
		const userName = user.user_metadata?.user_name || user.user_metadata?.preferred_username;

		return (
			<div className="space-y-6">
				<div className="text-center mb-8">
					<motion.div
						className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white/30"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
					>
						{avatarUrl ? (
							<img
								src={avatarUrl}
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						) : (
							<div className="w-full h-full bg-white/20 flex items-center justify-center">
								<UserIcon size={48} className="text-white" />
							</div>
						)}
					</motion.div>
					<h3 className="text-white text-2xl font-bold mb-1">{fullName}</h3>
					{userName && (
						<p className="text-white/70 text-sm mb-2">@{userName}</p>
					)}
					<p className="text-white/80">{user.email}</p>
				</div>

				{/* User Info Cards */}
				<div className="space-y-3">
					<motion.div
						className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						<div className="flex items-center gap-3 text-white">
							<Github size={20} />
							<span className="text-white/80">GitHub 계정으로 로그인됨</span>
						</div>
					</motion.div>
				</div>

				{/* Logout Button */}
				<motion.button
					onClick={handleLogout}
					className="w-full py-4 bg-red-500/90 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<LogOut size={20} />
					로그아웃
				</motion.button>
			</div>
		);
	}

	// 로그인되지 않은 상태: GitHub 로그인 버튼만 표시
	return (
		<div className="space-y-6">
			<div className="text-center mb-8">
				<motion.div
					className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 300, damping: 20 }}
				>
					<LogIn size={40} className="text-white" />
				</motion.div>
				<h3 className="text-white text-2xl font-bold mb-2">환영합니다!</h3>
				<p className="text-white/80">음악 세계로 들어가세요</p>
			</div>

			{/* GitHub Login Button */}
			<motion.button
				onClick={handleSignOauth}
				className="w-full py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 border border-white/20"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
			>
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
				</svg>
				GitHub로 로그인
			</motion.button>

			<p className="text-center text-white/60 text-sm">
				GitHub 계정으로 간편하게 로그인하세요
			</p>
		</div>
	);
}
