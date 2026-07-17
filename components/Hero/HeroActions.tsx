import { useNavigate } from "react-router-dom";

import Button from "../ui/Button/Button";

export default function HeroActions() {

    const navigate = useNavigate();

    return (
        <div className="mt-12 flex gap-4">

            <Button
                variant="outlined"
                onClick={() => navigate("/projects")}
            >
                Open Projects
            </Button>

            <Button
                variant="outlined"
                onClick={() => window.open("/resume.pdf", "_blank")}
            >
                View Resume
            </Button>

        </div>
    );
}