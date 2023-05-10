import React from "react";

export const Video = (): React.ReactElement => {
  return (
    <video controls width="100%">
      <source src="/video.mp4" type="video/mp4"/>
      Sorry, your browser doesn't support videos.
    </video>
  );
};
