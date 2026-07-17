import Grid from "./Grid";
import Glow from "./Glow";
import BackgroundParallax from "./BackgroundParallax";

export default function Background() {
    return (
        <>
            <BackgroundParallax />

            <Grid />

            <div className="background-light" />

            <Glow />

            <div className="background-noise" />

            <div className="background-vignette" />
        </>
    );
}