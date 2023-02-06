import { steps } from "../data";
import StepFooter from "./Steps/StepFooter";
import Step4 from "./Steps/Step-4";
import Step1 from "./Steps/Step-1";
import Step3 from "./Steps/Step-3";
import Step2 from "./Steps/Step-2";
import ThankYou from "./ThankYou";
import { useState } from "react";

type MultiStepFormProps = {
    currStep: number;
    onStepChange: (action: "INCREMENT" | "DECREMENT") => void;
};
export default function MultiStepForm(props: MultiStepFormProps): JSX.Element {
    const [shouldBlockNextButton, setShouldBlockNextButton] =
        useState<boolean>(true);

    function blockNextButton(): void {
        setShouldBlockNextButton(true);
    }

    function unblockNextButton(): void {
        console.log("Unblocking");
        setShouldBlockNextButton(false);
    }

    const stepsOfForm = [
        <Step1
            onInvalidInputs={blockNextButton}
            onValidInputs={unblockNextButton}
        />,
        <Step2 />,
        <Step3 />,
        <Step4 />,
    ];
    return (
        <form
            action={"#"}
            className={
                "flex h-full w-full rounded-lg bg-white p-4 drop-shadow-2xl"
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
                                    i === props.currStep &&
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
                className={"flex flex-1 flex-col justify-between py-12 px-[8%]"}
            >
                {props.currStep === stepsOfForm.length ? (
                    <ThankYou />
                ) : (
                    stepsOfForm[props.currStep]
                )}

                {props.currStep !== stepsOfForm.length && (
                    <StepFooter
                        currStep={props.currStep}
                        onStepChange={props.onStepChange}
                        nextButtonBlockStatus={shouldBlockNextButton}
                    />
                )}
            </main>
        </form>
    );
}
