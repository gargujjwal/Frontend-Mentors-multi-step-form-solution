import { steps } from "../data";
import SidebarProps from "../types/props/sidebar-props";

export default function Sidebar(props: SidebarProps): JSX.Element {
    return (
        <aside
            className={
                "flex h-full w-1/4 flex-col gap-10 rounded-xl bg-sidebar-desktop bg-cover px-16 py-12 uppercase text-white"
            }
            aria-label={"side-bar which holds step number"}
        >
            {steps.map((step, i) => (
                <div key={i} className={"flex items-center gap-6"}>
                    <div
                        className={
                            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white font-bold shadow-md" +
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
                        className={"flex flex-col gap-0.5"}
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
