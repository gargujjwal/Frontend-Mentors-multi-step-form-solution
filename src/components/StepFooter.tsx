import StepFooterProps from "../types/props/step-footer-props";

export default function StepFooter(props: StepFooterProps): JSX.Element {
    return (
        <footer
            className={`flex ${
                props.formStep < 1 ? "justify-end" : "justify-between"
            }`}
        >
            <button
                type={"button"}
                className={`border-0 font-bold capitalize text-gray-400 hover:text-marine-blue xl:text-xl ${
                    props?.blockPrevBtn && "cursor-not-allowed"
                } ${props.formStep < 1 && "hidden"}`}
                onClick={props.onPrevBtnClick}
                disabled={props.blockPrevBtn}
            >
                Go Back
            </button>

            <button
                type={"button"}
                className={`rounded-md bg-marine-blue font-bold capitalize text-white shadow-2xl hover:bg-light-marine-blue sm:px-5 sm:py-3 sm:text-sm xl:py-4 xl:px-8 xl:text-xl ${
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
