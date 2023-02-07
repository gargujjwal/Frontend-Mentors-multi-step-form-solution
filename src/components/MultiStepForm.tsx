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
                "flex sm:flex-col sm:gap-0 xl:h-full xl:flex-row xl:gap-4 xl:rounded-lg xl:bg-white xl:p-4"
            }
            onSubmit={props.onSubmit}
        >
            <Sidebar currStep={formStep} />

            {formStep === stepsOfForm.length ? (
                <ThankYou userData={props.userData} />
            ) : (
                stepsOfForm[formStep]
            )}
        </form>
    );
}
