import StepHeader from "../StepHeader";
import StepProps from "../../types/props/step-props";
import StepFooter from "../StepFooter";
import { ADD_ONS, AVAILABLE_PLANS } from "../../data";
import Plan from "../../types/plan";
import AddOn from "../../types/add-on";
import genUniqueId from "../../utility/genUniqueId";

export default function Step4(props: StepProps): JSX.Element {
    function prevBtnClickHandler(): void {
        props.onFormStepChange("DECREMENT");
    }

    function nextBtnClickHandler(): void {
        props.onFormStepChange("INCREMENT");
    }

    const selectedPlan = AVAILABLE_PLANS.find(
        value => props.userData.planID === value.id
    ) as Plan;
    const selectedAddOns = props.userData.addOnIDs.map<AddOn>(
        addOnIDs => ADD_ONS.find(addOn => addOn.id === addOnIDs) as AddOn
    );

    const totalCost = selectedAddOns
        .map<number>(addOn =>
            props.userData.planType === "m"
                ? addOn.monthlyCost
                : addOn.yearlyCost
        )
        .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            props.userData.planType === "m"
                ? selectedPlan.monthlyCost
                : selectedPlan.yearlyCost
        );
    return (
        <>
            <div>
                <StepHeader
                    heading={"Finishing up"}
                    headingCaption={
                        "Double-check everything looks OK before confirming."
                    }
                />
                <div
                    className={"rounded-xl bg-cool-gray p-6"}
                    aria-label={"summary"}
                >
                    <div
                        className={"flex justify-between"}
                        aria-label={"main-pack-chosen"}
                    >
                        <div className={"flex flex-col gap-1 text-xl"}>
                            <h3 className={"font-bold capitalize"}>
                                {selectedPlan.title}(
                                {props.userData.planType === "m"
                                    ? "Monthly"
                                    : "Yearly"}
                                )
                            </h3>
                            <div
                                className={
                                    "cursor-pointer text-left text-base text-gray-400 underline"
                                }
                                onClick={props.onFormStepChange.bind(
                                    null,
                                    "INCREMENT",
                                    1
                                )}
                            >
                                Change
                            </div>
                        </div>
                        <div className={"text-xl font-bold text-marine-blue"}>
                            $
                            {props.userData.planType === "m"
                                ? `${selectedPlan.monthlyCost}/mo`
                                : `${selectedPlan.yearlyCost}/yr`}
                        </div>
                    </div>
                    <hr className={"my-6"} />
                    <div
                        className={"flex flex-col gap-5 text-lg"}
                        aria-label={"adds on"}
                    >
                        {selectedAddOns.map(addOn => (
                            <div
                                key={genUniqueId()}
                                className={"flex justify-between"}
                            >
                                <p className={"text-gray-400"}>{addOn.title}</p>
                                <p className={"text-marine-blue"}>
                                    +$
                                    {props.userData.planType === "m"
                                        ? `${addOn.monthlyCost}/mo`
                                        : `${addOn.yearlyCost}/yr`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={"mt-4 flex justify-between p-8"}
                    aria-label={"total"}
                >
                    <p className={"text-lg text-gray-400"}>Total (per year)</p>
                    <p className={"text-2xl font-bold text-purplish-blue"}>
                        ${totalCost}/
                        {props.userData.planType === "m" ? "mo" : "yr"}
                    </p>
                </div>
            </div>
            <StepFooter
                formStep={3}
                onPrevBtnClick={prevBtnClickHandler}
                onNextBtnClick={nextBtnClickHandler}
            />
        </>
    );
}
