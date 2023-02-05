export default function ToggleSwitch(): JSX.Element {
    return (
        <label className="relative flex w-max cursor-pointer select-none items-center">
            <input
                type="checkbox"
                className="toggle-switch h-7 w-14 cursor-pointer appearance-none rounded-full bg-marine-blue transition-colors focus:outline-none"
            />
            <span className="toggle-ball absolute right-7 h-7 w-7 scale-50 transform rounded-full bg-white transition-transform" />
        </label>
    );
}
