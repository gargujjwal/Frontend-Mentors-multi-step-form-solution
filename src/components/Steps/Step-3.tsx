import StepHeader from "./StepHeader";
import { AddOns, AddOnsOption as AddsOnsOptionInterface } from "../../data";

interface AddOnsOptionProp extends AddsOnsOptionInterface {
    id: string;
}

function AddOnsOption(props: AddOnsOptionProp): JSX.Element {
    return (
        <label
            htmlFor={props.id}
            className={
                "flex cursor-pointer select-none items-center justify-center gap-10 rounded-lg border-2 border-gray-100 px-9 py-7 shadow-md transition-all hover:scale-105 hover:border-purplish-blue"
            }
        >
            <div className={"relative"}>
                <input
                    className={"custom-checkbox__inp hidden"}
                    id={props.id}
                    type="checkbox"
                />
                <span
                    className={
                        "custom-checkbox__box absolute -top-2 -left-2 h-6 w-6 rounded-md border border-gray-300 bg-transparent after:absolute after:top-0.5 after:left-2 after:hidden after:h-4 after:w-2 after:rotate-45 after:border-0 after:border-r-[3px] after:border-b-[3px] after:border-white after:content-['']"
                    }
                ></span>
            </div>
            <div className={"flex flex-1 flex-col gap-1"}>
                <h4 className={"text-xl font-bold capitalize text-marine-blue"}>
                    {props.title}
                </h4>
                <caption className={"text-md text-left text-gray-400"}>
                    {props.desc}
                </caption>
            </div>
            <span className={"text-xl font-bold text-purplish-blue"}>
                +${props.cost}/mo
            </span>
        </label>
    );
}

export default function Step3(): JSX.Element {
    return (
        <div>
            <StepHeader
                heading={"Pick add-ons"}
                headingCaption={"Add-ons help enhance your gaming experience."}
            />

            <div className={"flex flex-col gap-6"}>
                {AddOns.map(option => (
                    <AddOnsOption key={option.id} {...option} />
                ))}
            </div>
        </div>
    );
}
