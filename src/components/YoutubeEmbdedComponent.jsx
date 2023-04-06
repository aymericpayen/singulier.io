import React from "react";
import YouTube from "react-youtube";

const YoutubeEmbedded = ({ embedId }) => (
  <>
    <div>
      <YouTube
        className="transition ease-in-out delay-150"
        videoId="6ZUBJAmhMcc"
      />
    </div>
  </>
);

export default YoutubeEmbedded;
