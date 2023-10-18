"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
const Playlist = () => {
  const [playlistData, setPlaylistData] = useState<any>(null);

  const { slug } = useParams();
  console.log(slug);
  const fetchPlaylist = async () => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/playlist/${slug}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPlaylistData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPlaylist();
  }, []);
  if (!playlistData) {
    return <div>Loading...</div>;
  }

  const playlistName = playlistData.title;
  const tracks = playlistData.tracks.data;
  const playlistImageUrl = playlistData.picture;
  console.log(tracks);

  return (
    <div>
      <div className="w-[80%] mt-[10%] h-fit items-center flex ">
        <div className=" w-full">
          <img src={playlistImageUrl} alt="playlist image" />
        </div>
        <div className=" pr-5 text-2xl">{playlistName}</div>
      </div>
      <div className="pt-[2rem]">
        {tracks.map((track: any) => (
          <div
            key={track.id}
            className="w-[80%] mt-[2%] h-[4.5rem] bg-gray-700 flex hover:bg-slate-500  pl-5 cursor-pointer  gap-[2rem] items-center"
          >
            <div className="w-[50px]">
              <img
                className=" rounded-full"
                src={track.album.cover_big}
                alt="track_img"
              />
            </div>
            <div className=" text-lg">{track.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
