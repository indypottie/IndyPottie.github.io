import { useNavigate } from "react-router-dom";

import Button from "../ui/Button/Button";

export default function HeroActions() {

    const navigate = useNavigate();

    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-12">

            <Button
                variant="outlined"
                onClick={() => navigate("/projects")}
            >
                Open Projects
            </Button>

            <Button
                variant="outlined"
                onClick={() => window.open("/IndyPottieResume.pdf", "_blank")}
            >
                View Resume
            </Button>

        </div>
    );
}