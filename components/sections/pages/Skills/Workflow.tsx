import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";

import { skills } from "../../../../data/Skills";

export default function SkillsWorkflow() {

    return (

        <section className="pb-32">

            <Container>

                <EditorPanel title="WORKFLOW">

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-4
                            text-lg
                            font-semibold
                        "
                    >

                        {skills.workflow.map((step, index) => (

                            <div

                                key={step}

                                className="flex items-center gap-4"

                            >

                                <span>

                                    {step}

                                </span>

                                {index !== skills.workflow.length - 1 && (

                                    <span className="text-blue-400">

                                        →

                                    </span>

                                )}

                            </div>

                        ))}

                    </div>

                </EditorPanel>

            </Container>

        </section>

    );

}