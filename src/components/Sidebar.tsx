import { steps } from "../data";
import SidebarProps from "../types/props/sidebar-props";

export default function Sidebar(props: SidebarProps): JSX.Element {
    return (
        <aside
            className={
                "flex bg-cover uppercase text-white sm:absolute sm:top-0 sm:max-h-[20rem] sm:min-h-[13rem] sm:w-full sm:flex-row sm:items-start sm:justify-center sm:gap-6 sm:bg-sidebar-mobile sm:pt-12 xl:static xl:max-h-full xl:min-h-full xl:w-1/4 xl:flex-col xl:justify-start xl:gap-4 xl:rounded-lg xl:bg-sidebar-desktop xl:pt-20 xl:pl-12"
            }
            aria-label={"side-bar which holds step number"}
        >
            {steps.map((step, i) => (
                <div key={i} className={"flex justify-center gap-6"}>
                    <div
                        className={
                            "flex items-center justify-center rounded-full border border-white shadow-md sm:h-8 sm:w-8 sm:p-4 xl:h-10 xl:w-10 xl:p-5" +
                            `${
                                i === props.currStep &&
                                " border-light-blue bg-light-blue text-marine-blue"
                            }`
                        }
                        aria-label={"step-number"}
                    >
                        <span>{step.num}</span>
                    </div>
                    <div
                        className={
                            "flex flex-col gap-0.5 text-lg sm:hidden xl:block"
                        }
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
