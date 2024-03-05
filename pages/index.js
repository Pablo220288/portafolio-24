import Title from "@/components/Title";
import Pablo from "@/components/Pablo";
import About from "@/components/About";

export default function Home() {
  return (
    <>
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
      <Pablo />
      <Title />
      <About />
    </>
  );
}
