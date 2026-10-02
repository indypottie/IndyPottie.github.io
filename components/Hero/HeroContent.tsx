import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";

export default function HeroContent() {
    return (
        <div className="min-w-0 flex flex-col justify-center lg:pr-8">

            <HeroHeadline />

            <HeroDescription />

            <HeroActions />

        </div>
    );
}