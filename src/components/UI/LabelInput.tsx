import { useRef } from "react";

type LabelInputProps = {
    label: string;
    error: string;
    validator: (val: string) => boolean;
};
export default function LabelInput(props: LabelInputProps): JSX.Element {
    const inpRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <div className={"flex justify-between"}>
                <label className={"text-lg text-marine-blue"} htmlFor="name">
                    Name
                </label>

                <span
                    className={"text-base font-bold text-rose-500"}
                    aria-label={"error-message"}
                ></span>
            </div>
            <input
                id={"name"}
                className={"input"}
                type="text"
                required
                ref={inpRef}
            />
        </div>
    );
}
