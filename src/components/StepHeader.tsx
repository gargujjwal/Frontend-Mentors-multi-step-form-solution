type StepHeaderProps = {
    heading: string;
    headingCaption: string;
};
export default function StepHeader(props: StepHeaderProps): JSX.Element {
    return (
        <header className={"flex flex-col sm:gap-1 xl:mb-12 xl:gap-2"}>
            <h1
                className={"font-bold text-marine-blue sm:text-2xl xl:text-4xl"}
            >
                {props.heading}
            </h1>
            <div className={"sm:text-md text-left text-gray-400 xl:text-base"}>
                {props.headingCaption}
            </div>
        </header>
    );
}
