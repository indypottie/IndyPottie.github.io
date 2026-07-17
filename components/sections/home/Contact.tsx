import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";

import EditorPanel from "../../ui/EditorPanel/EditorPanel";
import PropertyRow from "../../ui/PropertyRow/PropertyRow";
import PropertyLinkRow from "../../ui/PropertyRow/PropertyLinkRow";

import { contact } from "../../../data/Contact";
import { contactForm } from "../../../data/ContactForm";
import { Button } from "../../ui";

export default function Contact() {

    return (

        <Section id="contact">

            <SectionHeader

                label="CONTACT"

                title={contactForm.title}

                description={contactForm.description}

            />

            <div className="mt-16 grid gap-8 lg:grid-cols-2">

                <EditorPanel title="MESSAGE">

                    <form

                        action={contactForm.action}

                        method="POST"

                        className="space-y-5 p-8"

                    >

                        <input

                            name="name"

                            placeholder="Your Name"

                            required

                            className="
                                w-full
                                rounded-lg
                                border
                                border-zinc-800
                                bg-zinc-900/50
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                            "

                        />

                        <input

                            type="email"

                            name="email"

                            placeholder="Your Email"

                            required

                            className="
                                w-full
                                rounded-lg
                                border
                                border-zinc-800
                                bg-zinc-900/50
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                            "

                        />

                        <input

                            name="subject"

                            placeholder="Subject"

                            className="
                                w-full
                                rounded-lg
                                border
                                border-zinc-800
                                bg-zinc-900/50
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                            "

                        />

                        <textarea

                            rows={7}

                            name="message"

                            placeholder="Get in touch with me."

                            required

                            className="
                                w-full
                                resize-none
                                rounded-lg
                                border
                                border-zinc-800
                                bg-zinc-900/50
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-blue-500
                            "

                        />

                            <Button

                                variant="filled"

                                type="submit"

                            >

                                Send Message

                            </Button>
                    </form>

                </EditorPanel>

                <EditorPanel title="CONNECTION">

                    <div className="p-8">

                        <PropertyRow

                            label="Status"

                            value={contact.availability}

                        />

                        <PropertyRow

                            label="Location"

                            value={contact.location}

                        />

                        <PropertyLinkRow

                            label="Email"

                            href={`mailto:${contact.email}`}

                        >

                            {contact.email}

                        </PropertyLinkRow>

                        <PropertyLinkRow

                            label="GitHub"

                            href={contact.github}

                        >

                            github.com/indypottie

                        </PropertyLinkRow>

                        <PropertyLinkRow

                            label="LinkedIn"

                            href={contact.linkedin}

                        >

                            LinkedIn Profile

                        </PropertyLinkRow>

                    </div>

                </EditorPanel>

            </div>

        </Section>

    );

}