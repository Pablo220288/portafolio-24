import { useEffect, useState } from "react";
import Title from "@/components/Title";
import Pablo from "@/components/Pablo";
import About from "@/components/About";
import Welcome from "@/components/Welcome";
import Loader from "@/components/Loader";

export default function Home() {
  const [loaderHide, setLoaderHide] = useState(false);

  const loaded = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setLoaderHide(true);
      }, "1000");
    }
  };

  useEffect(() => {
    loaded();
  }, []);

  return (
    <div className="body-content">
      <Loader hide={loaderHide} />
      <div className="background-wrapper">
        <div className="background-wrapper-video">
          <video
            className="bg-video"
            data-autoplay=""
            loop="loop"
            muted
            autoPlay="autoplay"
            preload="auto"
            src="https://landing4.wpengine.com/wp-content/uploads/2022/04/final-landing-1.mp4"
            type="video/webm"
          ></video>
        </div>
      </div>
      <Welcome />
      <Pablo />
    </div>
  );
}
