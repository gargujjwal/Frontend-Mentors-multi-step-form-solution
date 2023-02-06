import Step4 from "./Steps/Step-4";
import Step1 from "./Steps/Step-1";
import Step3 from "./Steps/Step-3";
import Step2 from "./Steps/Step-2";
import ThankYou from "./Steps/ThankYou";
import MultiStepFormProps from "../types/props/multi-step-form-props";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function MultiStepForm(props: MultiStepFormProps): JSX.Element {
    const [formStep, setFormStep] = useState<number>(props.step || 0);

    function formStepChangeHandler(
        action: "INCREMENT" | "DECREMENT",
        setTo?: number
    ): void {
        setTo
            ? setFormStep(setTo)
            : setFormStep(
                  prevState => prevState + (action === "INCREMENT" ? 1 : -1)
              );
    }

    const stepsOfForm = [
        <Step1
            userData={props.userData}
            onChange={props.onStep1Change}
            onFormStepChange={formStepChangeHandler}
        />,
        <Step2
            userData={props.userData}
            onChange={props.onStep2Change}
            onFormStepChange={formStepChangeHandler}
        />,
        <Step3
            userData={props.userData}
            onChange={props.onStep3Change}
            onFormStepChange={formStepChangeHandler}
        />,
        <Step4
            userData={props.userData}
            onFormStepChange={formStepChangeHandler}
        />,
    ];
    return (
        <form
            action={"#"}
            className={
                "flex h-full w-full rounded-lg bg-white p-4 drop-shadow-2xl"
            }
            onSubmit={props.onSubmit}
        >
            <Sidebar currStep={formStep} />
            <main
                className={"flex flex-1 flex-col justify-between py-12 px-[8%]"}
            >
                {formStep === stepsOfForm.length ? (
                    <ThankYou userData={props.userData} />
                ) : (
                    stepsOfForm[formStep]
                )}
            </main>
        </form>
    );
}
