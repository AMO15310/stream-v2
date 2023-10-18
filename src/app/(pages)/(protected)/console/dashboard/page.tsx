"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const fetchdata = async () => {
    const url = "https://spotify-scraper.p.rapidapi.com/v1/home";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      console.log(result);

      if (result.status && result.genres && result.genres.length > 0) {
        const playlists = result.genres[0].contents.items.map((item: any) => {
          const { id, name, images } = item;
          const imageUrl = images[0][0].url;
          const playlistUrl = `https://open.spotify.com/playlist/${id}`;
          return { id, name, imageUrl, playlistUrl };
        });

        // Now, 'playlists' contains an array of objects with playlist names and image URLs
        setData(playlists);
        console.log(playlists);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ...

  useEffect(() => {
    fetchdata();
  }, []);
  const navigateToPlaylist = (playlistID: string) => {
    router.replace(`/console/${playlistID}`);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-5 mt-4 ml-5 overflow-y-scroll">
        {data.map((item: any, index) => (
          <div
            key={index}
            className="playlist-item cursor-pointer p-3"
            onClick={() => navigateToPlaylist(item.id)}
          >
            <img src={item.imageUrl} alt={item.name} />
            <p className="pt-2 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
