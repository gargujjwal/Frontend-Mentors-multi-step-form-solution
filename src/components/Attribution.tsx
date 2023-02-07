export default function Attribution(): JSX.Element {
    return (
        <div className={"text-center sm:text-[.65rem] xl:text-sm"}>
            Challenge by{" "}
            <a
                className={"text-attribution-color"}
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
            >
                Frontend Mentor
            </a>
            . Coded by{" "}
            <a className={"text-attribution-color"} href="#">
                Ujjwal Garg
            </a>
            .
        </div>
    );
}
