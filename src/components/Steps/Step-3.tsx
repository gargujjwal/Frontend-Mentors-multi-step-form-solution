import StepHeader from "../StepHeader";

import { ChangeEvent, useState } from "react";
import { Step3Props } from "../../types/props/step-props";
import { ADD_ONS } from "../../data";
import AddOn from "../../types/add-on";
import StepFooter from "../StepFooter";

interface AddOnsOptionProp extends AddOn {
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    planType: "m" | "y";
}

function AddOnsOption(props: AddOnsOptionProp): JSX.Element {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked);

    function checkChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setIsChecked(prevState => !prevState);
        props.onChange(e);
    }

    return (
        <label
            htmlFor={props.id}
            className={
                "flex cursor-pointer select-none items-center justify-center gap-10 rounded-lg border-2 border-gray-100 px-9 py-7 shadow-md transition-all hover:scale-105 hover:border-purplish-blue hover:bg-magnolia"
            }
        >
            <div className={"relative"}>
                <input
                    className={"peer sr-only"}
                    id={props.id}
                    type="checkbox"
                    value={props.id}
                    onChange={checkChangeHandler}
                    checked={isChecked}
                />
                <span
                    className={
                        "absolute -top-2 -left-2 z-10 h-6 w-6 rounded-md border border-gray-300 bg-transparent after:absolute after:top-0.5 after:left-2 after:hidden after:h-4 after:w-2 after:rotate-45 after:border-0 after:border-r-[3px] after:border-b-[3px] after:border-white after:content-[''] peer-checked:border-0 peer-checked:bg-purplish-blue peer-checked:text-white peer-checked:after:block"
                    }
                />
            </div>
            <div className={"z-10 flex flex-1 flex-col gap-1"}>
                <h4 className={"text-xl font-bold capitalize text-marine-blue"}>
                    {props.title}
                </h4>
                <div className={"text-md text-left text-gray-400"}>
                    {props.desc}
                </div>
            </div>
            <span className={"z-10 text-xl font-bold text-purplish-blue"}>
                $
                {props.planType === "m"
                    ? `${props.monthlyCost}/mo`
                    : `${props.yearlyCost}/yo`}
            </span>
        </label>
    );
}

export default function Step3(props: Step3Props): JSX.Element {
    const [step3Data, setStep3Data] = useState<Set<string>>(new Set());

    function step3DataChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const { value, checked } = e.target;
        if (checked) setStep3Data(prevState => new Set(prevState.add(value)));
        else
            setStep3Data(prevState => {
                prevState.delete(value);
                return new Set(prevState);
            });
    }

    function step3FormSubmitHandler() {
        props.onChange &&
            props.onChange({
                addOnIDs: step3Data,
            });
        props.onFormStepChange("INCREMENT");
    }

    function prevBtnClickHandler(): void {
        props.onFormStepChange("DECREMENT");
    }

    return (
        <>
            <div>
                <StepHeader
                    heading={"Pick add-ons"}
                    headingCaption={
                        "Add-ons help enhance your gaming experience."
                    }
                />

                <div className={"flex flex-col gap-6"}>
                    {ADD_ONS.map(addOn => (
                        <AddOnsOption
                            key={addOn.id}
                            onChange={step3DataChangeHandler}
                            planType={props.userData.planType}
                            checked={
                                props.userData.addOnIDs.findIndex(
                                    i => addOn.id === i
                                ) !== -1
                            }
                            {...addOn}
                        />
                    ))}
                </div>
            </div>
            <StepFooter
                formStep={2}
                onPrevBtnClick={prevBtnClickHandler}
                onNextBtnClick={step3FormSubmitHandler}
            />
        </>
    );
}
