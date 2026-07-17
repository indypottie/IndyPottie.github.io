import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";

export default function CareerHighlight() {

    return (

        <section className="pb-32">

            <Container>

                <p
                    className="
                        mb-6
                        text-sm
                        uppercase
                        tracking-[0.35em]
                        text-blue-400
                    "
                >

                    CAREER HIGHLIGHT

                </p>

                <EditorPanel title="FEATURED EXPERIENCE">

                    <div className="p-10">

                        <h2 className="text-4xl font-black">

                            Behaviour Interactive Rotterdam

                        </h2>

                        <p className="mt-2 text-xl text-zinc-400">

                            Gameplay Programmer Intern

                        </p>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

                            A detailed breakdown of the internship, responsibilities,
                            technologies and achievements will live here.

                        </p>

                    </div>

                </EditorPanel>

            </Container>

        </section>

    );

}