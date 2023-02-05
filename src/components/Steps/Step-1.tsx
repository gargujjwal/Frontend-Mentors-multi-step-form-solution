import StepHeader from "./StepHeader";
import { useRef } from "react";

export default function Step1(): JSX.Element {
    const nameInpRef = useRef<HTMLInputElement>(null);
    const emailInpRef = useRef<HTMLInputElement>(null);
    const phoneNumInpRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <StepHeader
                heading={"Personal info"}
                headingCaption={
                    "Please provide your name, email address, and phone number."
                }
            />
            <fieldset
                className={"flex flex-col gap-6"}
                aria-label={"step-1 form"}
            >
                <div>
                    <div className={"flex justify-between"}>
                        <label
                            className={"text-lg text-marine-blue"}
                            htmlFor="name"
                        >
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
                        ref={nameInpRef}
                        placeholder={"e.g. Vanessa Mint"}
                    />
                </div>
                <div>
                    <div className={"flex justify-between"}>
                        <label
                            className={"text-lg text-marine-blue"}
                            htmlFor={"email"}
                        >
                            Email Address
                        </label>

                        <span
                            className={"text-base font-bold text-rose-500"}
                            aria-label={"error-message"}
                        ></span>
                    </div>
                    <input
                        id={"email"}
                        className={"input"}
                        type="email"
                        ref={emailInpRef}
                        required
                        placeholder={"e.g. vanessamint@gmail.com"}
                    />
                </div>
                <div>
                    <div className={"flex justify-between"}>
                        <label
                            className={"text-lg text-marine-blue"}
                            htmlFor="name"
                        >
                            Phone Number
                        </label>

                        <span
                            className={"text-base font-bold text-rose-500"}
                            aria-label={"error-message"}
                        ></span>
                    </div>
                    <input
                        id={"phoneNum"}
                        className={"input"}
                        type="tel"
                        required
                        ref={phoneNumInpRef}
                        placeholder={"e.g. +1 234 567 890"}
                    />
                </div>
            </fieldset>
        </div>
    );
}
