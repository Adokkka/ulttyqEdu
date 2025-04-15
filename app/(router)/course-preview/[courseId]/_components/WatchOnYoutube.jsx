import { Button } from "@/components/ui/button";
import { YoutubeIcon } from "lucide-react";
import React from "react";

function WatchOnYoutube({ courseInfo }) {
  return (
    <div className="p-3 text-center rounded-sm bg-white mb-3">
      <div className="flex flex-col gap-3 mt-3">
        <h2 className="text-black font-light">
          Бұл Курсты Youtube сайтынан көріңіз<br></br>
        </h2>

        <Button
          className="bg-red-500 text-white hover:bg-red-600
    hover:text-white flex gap-2 items-center"
          onClick={() => window.open(courseInfo.youtubeUrl, "_blank")}
        >
          <YoutubeIcon />
          Watch On Youtube
        </Button>
      </div>
    </div>
  );
}

export default WatchOnYoutube;
