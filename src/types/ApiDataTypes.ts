/**
 * Track 인터페이스 - API 응답 구조
 */
export interface Track {
	id: string; // 고유 ID
	title: string; // 곡 제목
	artist_name: string; // 아티스트 이름
	audio_url: string; // 음원 파일 주소
	image_url: string; // 커버 이미지 주소
	duration: number; // 곡 길이 (초 단위)
}
