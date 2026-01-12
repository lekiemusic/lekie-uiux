/**
 * Player Props 인터페이스
 */
export interface PlayerProps {
	selectedPanel: number;
	onPanelChange: (tab: number) => void;
}

