import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ModalLayout from "./layouts/ModalLayout";
import { LoginModal } from "./components/modal/LoginModal";
import { SearchModal } from "./components/modal/SearchModal";
import { PlaylistModal } from "./components/modal/PlaylistModal";
import { GenreModal } from "./components/modal/GenreModal";
import { CategoryModal } from "./components/modal/CategoryModal";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}>
				<Route element={<ModalLayout />}>
					<Route path="login" element={<LoginModal />} />
					<Route path="search" element={<SearchModal />} />
					<Route path="playlist" element={<PlaylistModal />} />
					<Route path="genre" element={<GenreModal />} />
					<Route path="category" element={<CategoryModal />} />
				</Route>
			</Route>
		</Routes>
	);
}
