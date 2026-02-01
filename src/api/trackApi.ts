import { createClient } from "@supabase/supabase-js";
import type { Track } from "../types/ApiDataTypes.ts";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

// api 호출
const fetchTracks = async (): Promise<Track[]> => {
	const { data, error } = await supabase
		.from("jamendo_tracks")
		.select("id, title, artist_name, audio_url, image_url, duration");

	if (error) throw error;

	return data;
};

export default fetchTracks;
