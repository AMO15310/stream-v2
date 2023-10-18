"use client";
import { useEffect, useState } from "react";

const AudioPlayer = () => {
  const audioSrc =
    "https://cdns-preview-1.dzcdn.net/stream/c-1afe80e99f64107a65a730966f301ed1-12.mp3";

  const [playState, setPlayState] = useState("play");
  const [muteState, setMuteState] = useState("unmute");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = document.querySelector("audio");

    const playIconContainer = document.getElementById("play-icon");
    const muteIconContainer = document.getElementById("mute-icon");

    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setDuration(Math.floor(audio.duration));
      });

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(Math.floor(audio.currentTime));
      });
    }

    if (playIconContainer && muteIconContainer) {
      playIconContainer.addEventListener("click", () => {
        if (audio) {
          if (playState === "play") {
            audio.play();
            setPlayState("pause");
          } else {
            audio.pause();
            setPlayState("play");
          }
        }
      });

      muteIconContainer.addEventListener("click", () => {
        if (audio) {
          if (muteState === "unmute") {
            audio.muted = true;
            setMuteState("mute");
          } else {
            audio.muted = false;
            setMuteState("unmute");
          }
        }
      });
    }
  }, [playState, muteState]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  return (
    <div className="fixed bottom-0 w-3/4 m-auto p-4 bg-gray-800 rounded-lg shadow-md">
      <audio src={audioSrc} preload="metadata" loop></audio>
      <p className="text-lg font-semibold">Dave x Central Cee</p>
      <div className="flex  gap-3">
        <button
          id="play-icon"
          className="p-2 border-2 border-gray-400 rounded-full bg-white text-gray-600 hover:bg-gray-400 hover:text-white focus:outline-none"
        >
          {playState === "play" ? "Play" : "Pause"}
        </button>
        <span className="time mt-2">{calculateTime(currentTime)}</span>
        <input
          type="range"
          id="seek-slider"
          className="w-3/4"
          max={duration}
          value={currentTime}
        />
        <button
          id="mute-icon"
          className="p-2 border-2 border-gray-400 rounded-full bg-white text-gray-600 hover:bg-gray-400 hover:text-white focus:outline-none"
        >
          {muteState === "unmute" ? "Mute" : "Unmute"}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
