import StepHeader from "./StepHeader";

export default function Step4(): JSX.Element {
    return (
        <div>
            <StepHeader
                heading={"Finishing up"}
                headingCaption={
                    "Double-check everything looks OK before confirming."
                }
            />
            <div
                className={"rounded-xl bg-cool-gray p-6"}
                aria-label={"summary"}
            >
                <div
                    className={"flex justify-between"}
                    aria-label={"main-pack-chosen"}
                >
                    <div className={"flex flex-col gap-1 text-xl"}>
                        <h3 className={"font-bold"}>Arcade(Yearly)</h3>
                        <caption
                            className={
                                "text-left text-base text-gray-400 underline"
                            }
                        >
                            Change
                        </caption>
                    </div>
                    <div className={"text-xl font-bold text-marine-blue"}>
                        $90/yr
                    </div>
                </div>
                <hr className={"my-6"} />
                <div
                    className={"flex flex-col gap-5 text-lg"}
                    aria-label={"adds on"}
                >
                    <div className={"flex justify-between"}>
                        <p className={"text-gray-400"}>Online service</p>
                        <p className={"text-marine-blue"}>+$10/yr</p>
                    </div>
                    <div className={"flex justify-between"}>
                        <p className={"text-gray-400"}>Online service</p>
                        <p className={"text-marine-blue"}>+$10/yr</p>
                    </div>
                </div>
            </div>
            <div
                className={"mt-4 flex justify-between p-8"}
                aria-label={"total"}
            >
                <p className={"text-lg text-gray-400"}>Total (per year)</p>
                <p className={"text-2xl font-bold text-purplish-blue"}>
                    $120/yr
                </p>
            </div>
        </div>
    );
}
