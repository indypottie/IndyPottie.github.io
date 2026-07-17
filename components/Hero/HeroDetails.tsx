import EditorPanel from "../ui/EditorPanel/EditorPanel";
import PropertyRow from "../ui/PropertyRow/PropertyRow";
import StatusDot from "../ui/StatusDot/StatusDot";

export default function HeroDetails() {
    return (
        <EditorPanel title="Object Details">

            <PropertyRow
                label="Status"
                value={<StatusDot />}
            />

            <PropertyRow
                label="Class"
                value="Game AI & Systems Programmer"
            />

            <PropertyRow
                label="Engine"
                value="Unreal Engine 5"
            />

            <PropertyRow
                label="Primary Language"
                value="Modern C++"
            />

            <PropertyRow
                label="Location"
                value="Belgium / Europe"
            />

        </EditorPanel>
    );
}