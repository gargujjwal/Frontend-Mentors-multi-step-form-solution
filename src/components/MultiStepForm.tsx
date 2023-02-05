import ThankYou from "./ThankYou";
import Step4 from "./Steps/Step-4";
import Step1 from "./Steps/Step-1";
import Step2 from "./Steps/Step-2";
import Step3 from "./Steps/Step-3";

export default function MultiStepForm(): JSX.Element {
    const steps: { num: number; desc: string }[] = [
        { num: 1, desc: "your info" },
        { num: 2, desc: "select plan" },
        { num: 3, desc: "add-ons" },
        { num: 4, desc: "summary" },
    ];

    return (
        <form
            action={"#"}
            className={
                "flex h-full w-full rounded-lg bg-white p-4 drop-shadow-2xl lg:gap-40"
            }
        >
            <aside
                className={
                    "flex h-full w-1/4 flex-col gap-10 rounded-xl bg-sidebar-desktop bg-cover px-16 py-12 uppercase text-white"
                }
                aria-label={"side-bar which holds step number"}
            >
                {steps.map((step, i) => (
                    <div className={"flex items-center gap-6"}>
                        <div
                            className={
                                "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white font-bold shadow-md" +
                                `${
                                    i === 1 &&
                                    "border-0 border-light-blue bg-light-blue text-marine-blue"
                                }`
                            }
                            aria-label={"step-number"}
                        >
                            {step.num}
                        </div>
                        <div
                            className={"flex flex-col gap-0.5"}
                            aria-label={"step-info"}
                        >
                            <p className={"text-gray-400"}>Step {step.num}</p>
                            <p className={"font-bold"}>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </aside>

            <main
                className={"flex flex-1 flex-col justify-between py-12 pr-80"}
            >
                {/*<Step4 />*/}
                <ThankYou />

                {/*<footer className={"flex justify-between"}>
                    <button
                        type={"button"}
                        className={
                            "border-0 font-bold capitalize text-gray-400 hover:underline"
                        }
                    >
                        Go Back
                    </button>
                    <button
                        type={"button"}
                        className={
                            "rounded-md bg-marine-blue py-4 px-8 font-bold capitalize text-white shadow-2xl"
                        }
                    >
                        Next Step
                    </button>
                </footer>*/}
            </main>
        </form>
    );
}
