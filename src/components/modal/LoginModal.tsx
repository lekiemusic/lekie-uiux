import { motion } from "motion/react";
import { LogIn, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export function LoginModal() {
	const [isSignUp, setIsSignUp] = useState(false);

	return (
		<div className="space-y-6">
			<div className="text-center mb-8">
				<motion.div
					className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 300, damping: 20 }}>
					<LogIn size={40} className="text-white" />
				</motion.div>
				<h3 className="text-white text-2xl font-bold mb-2">
					{isSignUp ? "회원가입" : "환영합니다!"}
				</h3>
				<p className="text-white/80">
					{isSignUp
						? "Player5 Music과 함께 시작하세요"
						: "음악 세계로 들어가세요"}
				</p>
			</div>

			{/* Login Form */}
			<div className="space-y-4">
				{isSignUp && (
					<motion.div
						className="relative"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}>
						<User
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
							size={20}
						/>
						<input
							type="text"
							placeholder="이름"
							className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50 transition-all"
						/>
					</motion.div>
				)}

				<div className="relative">
					<Mail
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="email"
						placeholder="이메일"
						className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50 transition-all"
					/>
				</div>

				<div className="relative">
					<Lock
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="password"
						placeholder="비밀번호"
						className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50 transition-all"
					/>
				</div>

				{isSignUp && (
					<motion.div
						className="relative"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}>
						<Lock
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
							size={20}
						/>
						<input
							type="password"
							placeholder="비밀번호 확인"
							className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/50 transition-all"
						/>
					</motion.div>
				)}

				<motion.button
					className="w-full py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}>
					{isSignUp ? "가입하기" : "로그인"}
				</motion.button>
			</div>

			{/* Divider */}
			<div className="flex items-center gap-4 my-6">
				<div className="flex-1 h-px bg-white/20"></div>
				<span className="text-white/60 text-sm">또는</span>
				<div className="flex-1 h-px bg-white/20"></div>
			</div>

			{/* Social Login */}
			<div className="space-y-3">
				<motion.button
					className="w-full py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}>
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
						<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
						<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
						<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
					</svg>
					Google로 계속하기
				</motion.button>

				<motion.button
					className="w-full py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}>
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
					</svg>
					GitHub로 계속하기
				</motion.button>
			</div>

			{/* Toggle Sign Up */}
			<div className="text-center pt-4">
				<button
					onClick={() => setIsSignUp(!isSignUp)}
					className="text-white/80 hover:text-white text-sm transition-colors">
					{isSignUp ? "이미 계정이 있으신가요? " : "계정이 없으신가요? "}
					<span className="font-bold underline">
						{isSignUp ? "로그인" : "회원가입"}
					</span>
				</button>
			</div>
		</div>
	);
}
