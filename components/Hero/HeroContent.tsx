import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";

export default function HeroContent() {
    return (
        <div className="flex flex-col justify-center">

            <HeroHeadline />

            <HeroDescription />

            <HeroActions />

        </div>
    );
}