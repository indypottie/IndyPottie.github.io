import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";
import Badge from "../../../ui/Badge";

import { skills } from "../../../../data/Skills";

export default function SkillCategories() {

    return (

        <section className="pb-24">

            <Container>

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >

                    {skills.categories.map(category => (

                        <EditorPanel

                            key={category.title}

                            title={category.title}

                        >

                            <div className="flex flex-wrap gap-3">

                                {category.skills.map(skill => (

                                    <Badge key={skill}>

                                        {skill}

                                    </Badge>

                                ))}

                            </div>

                        </EditorPanel>

                    ))}

                </div>

            </Container>

        </section>

    );

}