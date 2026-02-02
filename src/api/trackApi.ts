import supabase from "../liv/supabase.ts";
import type { Track } from "../types/ApiDataTypes.ts";

// api 호출
const fetchTracks = async (): Promise<Track[]> => {
	const { data, error } = await supabase
		.from("jamendo_tracks")
		.select("id, title, artist_name, audio_url, image_url, duration");

	if (error) throw error;

	return data;
};

export default fetchTracks;
