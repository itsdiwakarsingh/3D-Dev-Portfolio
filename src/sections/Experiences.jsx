import { experiences } from "../constants";
import { Timeline } from "../components/Timeline";
import { exp } from "three/tsl";

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
