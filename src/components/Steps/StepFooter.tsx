export default function StepFooter(props: {
    currStep: number;
    onStepChange: (action: "INCREMENT" | "DECREMENT") => void;
    nextButtonBlockStatus?: boolean;
    previousButtonBlockStatus?: boolean;
}): JSX.Element {
    return (
        <footer className={"flex justify-between"}>
            {props.currStep > 0 && (
                <button
                    type={"button"}
                    className={`border-0 font-bold capitalize text-gray-400 hover:underline ${
                        props?.nextButtonBlockStatus && "cursor-not-allowed"
                    }`}
                    onClick={props.onStepChange.bind(null, "DECREMENT")}
                    disabled={props.previousButtonBlockStatus}
                >
                    Go Back
                </button>
            )}
            <button
                type={"button"}
                className={`rounded-md bg-marine-blue py-4 px-8 font-bold capitalize text-white shadow-2xl hover:bg-light-marine-blue ${
                    props?.nextButtonBlockStatus && "cursor-not-allowed"
                }`}
                onClick={props.onStepChange.bind(null, "INCREMENT")}
                disabled={props.nextButtonBlockStatus}
            >
                Next Step
            </button>
        </footer>
    );
}
