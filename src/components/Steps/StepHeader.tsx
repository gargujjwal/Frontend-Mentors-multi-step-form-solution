type StepHeaderProps = {
    heading: string;
    headingCaption: string;
};
export default function StepHeader(props: StepHeaderProps): JSX.Element {
    return (
        <header className={"mb-12 flex flex-col gap-2"}>
            <h1 className={"text-4xl font-bold text-marine-blue"}>
                {props.heading}
            </h1>
            <caption className={"text-left text-gray-400"}>
                {props.headingCaption}
            </caption>
        </header>
    );
}
