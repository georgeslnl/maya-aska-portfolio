'use client';
const PAGE_TURN_SRC = '/sounds/page_turn.mp3';

let sharedAudio = null;

function getSharedAudio() {
  if (typeof window === 'undefined') return null;
  if (!sharedAudio) {
    sharedAudio = new Audio(PAGE_TURN_SRC);
    sharedAudio.preload = 'auto';
  }
  return sharedAudio;
}

export default function usePageTurnSound() {
  return () => {
    const audio = getSharedAudio();
    if (!audio) return;

    audio.currentTime = 0;
    const played = audio.play();
    if (played && typeof played.catch === 'function') {
      played.catch(() => {});
    }
  };
}
