import StepHeader from "../StepHeader";
import { ChangeEvent, useEffect, useState } from "react";
import ToggleSwitch from "../UI/ToggleSwitch";
import { Step2Props } from "../../types/props/step-props";
import Plan from "../../types/plan";
import { AVAILABLE_PLANS } from "../../data";
import StepFooter from "../StepFooter";

interface PlanProps extends Plan {
    planType: "m" | "y";
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function PlanCard(props: PlanProps) {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked);

    function checkChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setIsChecked(prevState => !prevState);
        props.onChange(e);
    }

    return (
        <label className={"flex-1"} htmlFor={props.id}>
            <input
                className={"peer sr-only"}
                type={"radio"}
                name={"plan"}
                value={props.id}
                id={props.id}
                onChange={checkChangeHandler}
                checked={isChecked}
            />
            <div className="cursor-pointer select-none rounded-lg border-2 border-gray-100 p-7 shadow-sm transition-all hover:scale-105 hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-magnolia">
                <div className="mb-16 h-20 w-20 rounded-full drop-shadow-sm">
                    <img
                        className={"h-full w-full"}
                        src={props.img}
                        alt={`${props.title}-icon`}
                    />
                </div>
                <h4
                    className={"text-2xl font-bold capitalize text-marine-blue"}
                >
                    {props.title}
                </h4>
                <div className={"text-left text-lg text-gray-400"}>
                    $
                    {props.planType === "m"
                        ? `${props.monthlyCost}/mo`
                        : `${props.yearlyCost}/yo`}
                </div>
                <div
                    className={`text-md text-marine-blue ${
                        props.planType === "m" && "hidden"
                    }`}
                >
                    {props.noOfMonthsFreeOnYear} months free
                </div>
            </div>
        </label>
    );
}

type Step2Data = {
    planID: string;
    planType: "m" | "y";
};
export default function Step2(props: Step2Props): JSX.Element {
    const [step2Data, setStep2Data] = useState<Step2Data>({
        ...props.userData,
    });
    const [formValidity, setFormValidity] = useState<boolean>(false);

    // check for form-validity on change of planID
    useEffect(() => {
        const formValidator = setTimeout(
            () => setFormValidity(step2Data.planID.length !== 0),
            500
        );
        return () => clearTimeout(formValidator);
    }, [step2Data.planID]);

    function planChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const { value, checked } = e.target;

        setStep2Data(prevState => ({
            ...prevState,
            planID: checked ? value : "",
        }));
    }

    function onToggleHandler(e: ChangeEvent<HTMLInputElement>): void {
        // if toggled is meddled with, then it becomes yearly, otherwise it is by default monthly
        const { checked } = e.target;
        setStep2Data(prevState => ({
            ...prevState,
            planType: checked ? "y" : "m",
        }));
    }

    function step2FormSubmitHandler(): void {
        props.onChange &&
            props.onChange({
                ...step2Data,
            });
        props.onFormStepChange("INCREMENT");
    }

    function prevBtnClickHandler() {
        props.onFormStepChange("DECREMENT");
    }

    return (
        <>
            <div>
                <StepHeader
                    heading={"Select your plan"}
                    headingCaption={
                        "You have the option of monthly or yearly billing."
                    }
                />

                <div
                    className={"my-12 flex justify-between gap-8"}
                    aria-label={"available-plans"}
                >
                    {AVAILABLE_PLANS.map(plan => (
                        <PlanCard
                            key={plan.id}
                            planType={step2Data.planType}
                            onChange={planChangeHandler}
                            checked={props.userData.planID === plan.id}
                            {...plan}
                        />
                    ))}
                </div>

                <div
                    className={
                        "flex justify-center gap-8 bg-alabaster py-6 text-xl font-bold"
                    }
                >
                    <span
                        className={
                            step2Data.planType === "m"
                                ? `text-marine-blue`
                                : "text-gray-400"
                        }
                    >
                        Monthly
                    </span>
                    <ToggleSwitch
                        checked={step2Data.planType === "y"}
                        onChange={onToggleHandler}
                    />
                    <span
                        className={
                            step2Data.planType === "m"
                                ? "text-gray-400"
                                : "text-marine-blue"
                        }
                    >
                        Yearly
                    </span>
                </div>
            </div>
            <StepFooter
                formStep={1}
                blockNextBtn={!formValidity}
                onPrevBtnClick={prevBtnClickHandler}
                onNextBtnClick={step2FormSubmitHandler}
            />
        </>
    );
}
