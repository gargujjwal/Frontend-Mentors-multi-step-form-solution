import StepFooterProps from "../types/props/step-footer-props";

export default function StepFooter(props: StepFooterProps): JSX.Element {
    return (
        <footer className={"flex justify-between sm:w-full"}>
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
                className={`rounded-md bg-marine-blue font-bold capitalize text-white shadow-2xl hover:bg-light-marine-blue  ${
                    props?.blockNextBtn && "cursor-not-allowed"
                } ${
                    props.formStep === 3 &&
                    "bg-purplish-blue hover:bg-light-purplish-blue"
                }sm:text-sm sm:px-5 sm:py-3 xl:py-4 xl:px-8`}
                onClick={props?.onNextBtnClick}
                disabled={props?.blockNextBtn}
            >
                {props.formStep === 3 ? "Confirm" : "Next Step"}
            </button>
        </footer>
    );
}
