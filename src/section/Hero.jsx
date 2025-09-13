import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";

const Hero = () => {
  return (
    <section className="flex itmes-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vh", height: "100vh" }}
      >
        <Canvas>
          <Astronaut />
        </Canvas>
        n
      </figure>
    </section>
  );
};

export default Hero;
