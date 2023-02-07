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
        <label htmlFor={props.id}>
            <input
                className={"peer sr-only"}
                type={"radio"}
                name={"plan"}
                value={props.id}
                id={props.id}
                onChange={checkChangeHandler}
                checked={isChecked}
            />
            <div
                className={`sm:grid-rows-${
                    props.planType === "m" ? 2 : 3
                } cursor-pointer select-none rounded-lg border-2 border-gray-100 shadow-sm transition-all hover:scale-105 hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-magnolia sm:grid sm:grid-cols-[1fr_2fr] sm:gap-x-0 sm:py-3 sm:px-4 xl:p-7`}
            >
                <div className="rounded-full drop-shadow-sm sm:row-span-3 sm:row-span-2 sm:h-12 sm:w-12 xl:mb-16 xl:h-20 xl:w-20">
                    <img
                        className={"h-full w-full xl:my-auto"}
                        src={props.img}
                        alt={`${props.title}-icon`}
                    />
                </div>
                <h4
                    className={
                        "font-bold capitalize text-marine-blue sm:text-lg xl:text-2xl"
                    }
                >
                    {props.title}
                </h4>
                <div className={"text-gray-400 sm:text-sm xl:text-lg"}>
                    $
                    {props.planType === "m"
                        ? `${props.monthlyCost}/mo`
                        : `${props.yearlyCost}/yo`}
                </div>
                {props.planType !== "m" && (
                    <div className={"text-marine-blue sm:text-sm"}>
                        {props.noOfMonthsFreeOnYear} months free
                    </div>
                )}
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
        <div className={"sm:flex sm:flex-col sm:gap-6"}>
            <div className={"sm:flex sm:flex-col sm:gap-6"}>
                <StepHeader
                    heading={"Select your plan"}
                    headingCaption={
                        "You have the option of monthly or yearly billing."
                    }
                />

                <div
                    className={
                        "flex sm:flex-col sm:gap-3 xl:my-12 xl:justify-between xl:gap-8"
                    }
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
                        "flex justify-center bg-alabaster font-semibold sm:gap-7 sm:py-4 sm:text-lg xl:gap-8 xl:py-6 xl:text-xl"
                    }
                >
                    <span
                        className={` ${
                            step2Data.planType === "m"
                                ? "text-marine-blue"
                                : "text-gray-400"
                        } sm:text-base`}
                    >
                        Monthly
                    </span>
                    <ToggleSwitch
                        checked={step2Data.planType === "y"}
                        onChange={onToggleHandler}
                    />
                    <span
                        className={`${
                            step2Data.planType === "m"
                                ? "text-gray-400"
                                : "text-marine-blue"
                        } sm:text-base`}
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
        </div>
    );
}
