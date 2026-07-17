import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";
import Badge from "../../../ui/Badge";

import { skills } from "../../../../data/Skills";

export default function SkillsFocus() {

    return (

        <section className="pb-24">

            <Container>

                <EditorPanel title="CURRENT FOCUS">

                    <div
                        className="
                            flex
                            flex-col
                            gap-8
                        "
                    >

                        <div>

                            <h2 className="text-4xl font-black">

                                Specialization

                            </h2>

                            <p className="mt-4 max-w-3xl leading-8 text-zinc-400">

                                I enjoy solving technical gameplay challenges,
                                designing scalable gameplay architecture and
                                building AI systems that remain maintainable
                                as projects grow.

                            </p>

                        </div>

                        <div className="flex flex-wrap gap-3">

                            {skills.focus.map(skill => (

                                <Badge key={skill}>

                                    {skill}

                                </Badge>

                            ))}

                        </div>

                    </div>

                </EditorPanel>

            </Container>

        </section>

    );

}