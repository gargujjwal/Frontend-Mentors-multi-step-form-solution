type StepItem = {
    num: number;
    desc: string;
};
export default function StepItem(props: StepItem): JSX.Element {
    return (
        <div className={"flex gap-4 text-white"}>
            <div
                className={"rounded-full border-2 border-white p-1 font-bold"}
                aria-label={"step number"}
            >
                {props.num}
            </div>
            <div
                className={"flex flex-col gap-2"}
                aria-label={"step description"}
            >
                <div className={"text-md"}>Step {props.num}</div>
                <div className={"font-bold uppercase"}>{props.desc}</div>
            </div>
        </div>
    );
}
