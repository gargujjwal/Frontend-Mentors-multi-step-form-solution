import { steps } from "../data";
import SidebarProps from "../types/props/sidebar-props";

export default function Sidebar(props: SidebarProps): JSX.Element {
    return (
        <aside
            className={
                "flex bg-cover uppercase text-white sm:absolute sm:max-h-[50%] sm:min-h-[25%] sm:w-full sm:justify-center sm:gap-6 sm:bg-sidebar-mobile sm:px-[10%] sm:py-[15%] xl:min-h-full xl:w-1/3 xl:rounded-lg"
            }
            aria-label={"side-bar which holds step number"}
        >
            {steps.map((step, i) => (
                <div
                    key={i}
                    className={"relative -top-8 flex items-center gap-6"}
                >
                    <div
                        className={
                            "flex items-center justify-center rounded-full border border-white shadow-md sm:h-8 sm:w-8 sm:text-base sm:font-semibold xl:h-10 xl:w-10 xl:text-lg xl:font-bold" +
                            `${
                                i === props.currStep &&
                                "border-0 border-light-blue bg-light-blue text-marine-blue"
                            }`
                        }
                        aria-label={"step-number"}
                    >
                        {step.num}
                    </div>
                    <div
                        className={"flex flex-col gap-0.5 sm:hidden xl:block"}
                        aria-label={"step-info"}
                    >
                        <p className={"text-gray-400"}>Step {step.num}</p>
                        <p className={"font-bold"}>{step.desc}</p>
                    </div>
                </div>
            ))}
        </aside>
    );
}
