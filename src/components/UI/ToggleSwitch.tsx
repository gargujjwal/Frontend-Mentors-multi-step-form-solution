import { ChangeEvent, useState } from "react";

interface ToggleSwitchProps {
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleSwitch(props: ToggleSwitchProps): JSX.Element {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked);

    function checkBoxChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setIsChecked(prevState => !prevState);
        props.onChange(e);
    }

    return (
        <label className="relative flex w-max cursor-pointer select-none items-center">
            <input
                type="checkbox"
                className="peer h-7 w-14 cursor-pointer appearance-none rounded-full bg-marine-blue transition-colors focus:outline-none"
                onChange={checkBoxChangeHandler}
                checked={isChecked}
            />
            <span className="absolute right-7 h-7 w-7 scale-50 transform rounded-full bg-white transition-transform peer-checked:translate-x-7" />
        </label>
    );
}
