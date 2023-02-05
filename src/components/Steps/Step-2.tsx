import StepHeader from "./StepHeader";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "../UI/ToggleSwitch";

interface Plan {
    imgPath: string;
    title: string;
    cost: number;
}

interface PlanProp extends Plan {
    monthly: boolean;
    value: string;
    id: string;
}

function Plan(props: PlanProp) {
    return (
        <>
            <input
                className={"plan-card-inp hidden"}
                type="radio"
                name={"plan"}
                value={props.value}
                id={props.id}
            />
            <label
                className="plan-card-label flex-1 cursor-pointer rounded-lg border-2 border-gray-100 p-7 shadow-sm transition-all hover:scale-105 hover:border-purplish-blue"
                htmlFor={props.id}
            >
                <div className="mb-16 h-20 w-20 rounded-full drop-shadow-sm">
                    <img
                        className={"h-full w-full"}
                        src={props.imgPath}
                        alt={`${props.title}-icon`}
                    />
                </div>
                <h4
                    className={"text-2xl font-bold capitalize text-marine-blue"}
                >
                    {props.title}
                </h4>
                <caption className={"text-left text-lg text-gray-400"}>
                    ${props.cost}/{props.monthly ? "mo" : "yo"}
                </caption>
            </label>
        </>
    );
}

export default function Step2(): JSX.Element {
    const availablePlans: Plan[] = [
        {
            imgPath: arcadeIcon,
            cost: 9,
            title: "arcade",
        },
        {
            imgPath: advancedIcon,
            cost: 12,
            title: "advanced",
        },
        {
            imgPath: proIcon,
            title: "pro",
            cost: 15,
        },
    ];
    return (
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
                {availablePlans.map((plan, i) => (
                    <Plan
                        key={`plan-${i}`}
                        monthly={true}
                        value={`${i}`}
                        id={`plan-${i}`}
                        {...plan}
                    />
                ))}
            </div>

            <div
                className={
                    "flex justify-center gap-8 bg-alabaster py-6 text-xl font-bold"
                }
            >
                <span className={"text-marine-blue"}>Monthly</span>
                <ToggleSwitch />
                <span className={"text-gray-400"}>Yearly</span>
            </div>
        </div>
    );
}
