import StepFooterProps from "../types/props/step-footer-props";

export default function StepFooter(props: StepFooterProps): JSX.Element {
    return (
        <footer className={"flex justify-between"}>
            <button
                type={"button"}
                className={`border-0 font-bold capitalize text-gray-400 hover:text-marine-blue ${
                    props?.blockPrevBtn && "cursor-not-allowed"
                } ${props.formStep < 1 && "hidden"}`}
                onClick={props.onPrevBtnClick}
                disabled={props.blockPrevBtn}
            >
                Go Back
            </button>

            <button
                type={"button"}
                className={`rounded-md bg-marine-blue py-4 px-8 font-bold capitalize text-white shadow-2xl hover:bg-light-marine-blue ${
                    props?.blockNextBtn && "cursor-not-allowed"
                } ${
                    props.formStep === 3 &&
                    "bg-purplish-blue hover:bg-light-purplish-blue"
                }`}
                onClick={props?.onNextBtnClick}
                disabled={props?.blockNextBtn}
            >
                {props.formStep === 3 ? "Confirm" : "Next Step"}
            </button>
        </footer>
    );
}
