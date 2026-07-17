import Button from "../ui/Button/Button";

export default function HeroActions() {
    return (
        <div className="mt-12 flex gap-4">

            <Button variant="outlined">
                Open Projects
            </Button>

            <Button variant="outlined">
                View Resume
            </Button>

        </div>
    );
}