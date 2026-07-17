import Container from "../../../ui/Container";
import SectionHeader from "../../../ui/SectionHeader/SectionHeader";
import Badge from "../../../ui/Badge";

import { about } from "../../../../data/About";

export default function Interests() {

    return (

        <section className="pb-32">

            <Container>

                <SectionHeader

                    label="BEYOND DEVELOPMENT"

                    title="Beyond Programming"

                    description="A few interests outside writing code."

                />

                <div className="flex flex-wrap gap-3">

                    {about.interests.map(item => (

                        <Badge key={item}>

                            {item}

                        </Badge>

                    ))}

                </div>

            </Container>

        </section>

    );

}