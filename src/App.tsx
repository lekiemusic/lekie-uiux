import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthManager from "./components/AuthManager.tsx";

export default function App() {
	return (
		<>
			<AuthManager />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</>
	);
}
