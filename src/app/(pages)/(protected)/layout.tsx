import Sidebar from "@/components/Sidebar";
import AudioPlayer from "@/components/Player";
import React from "react";

const WebMusicPlayerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-1/4 bg-gray-800 p-4 pt-8">
        <div className="h-full gap-8 flex flex-col">
          <div className=" text-lg font-semibold">Home</div>
          <div className=" text-lg font-semibold">Search</div>
          <div className=" text-lg font-semibold">Recents</div>
          <div className=" text-lg font-semibold">Favourites</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* Add your main content here */}
        <div className="">{children}</div>
        <div className=" bottom-0">
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
};

export default WebMusicPlayerLayout;
