import StepHeader from "./StepHeader";
import { ChangeEvent, useEffect, useState } from "react";

type Value = {
    value: string;
    isValid: boolean | null;
};

type Step1Data = {
    name: Value;
    email: Value;
    phone: Value;
};

type Step1Props = {
    onValidInputs: () => void;
    onInvalidInputs: () => void;
};

export default function Step1(props: Step1Props): JSX.Element {
    const [step1Data, setStep1Data] = useState<Step1Data>({
        name: { value: "", isValid: null },
        email: { value: "", isValid: null },
        phone: { value: "", isValid: null },
    });

    const {
        name: { isValid: nameIsValid },
        email: { isValid: emailIsValid },
        phone: { isValid: phoneIsValid },
    } = step1Data;

    useEffect(() => {
        console.dir(step1Data);
        const formValidateTimeout = setTimeout(() => {
            if (
                step1Data.phone.isValid &&
                step1Data.email.isValid &&
                step1Data.name.isValid
            )
                props.onValidInputs();
            else props.onInvalidInputs();
        }, 500);
        console.log("here");
        return () => clearTimeout(formValidateTimeout);
    }, [step1Data]);

    function validateFields(fields: "name" | "email" | "phone" | "all"): void {
        switch (fields) {
            case "name":
                setStep1Data(prevState => ({
                    ...prevState,
                    name: {
                        value: prevState.name.value,
                        isValid:
                            prevState.name.value !== "" ||
                            prevState.name.value.match(/\d/) !== null,
                    },
                }));
                break;
            case "email":
                setStep1Data(prevState => ({
                    ...prevState,
                    email: {
                        value: prevState.email.value,
                        isValid:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                                prevState.email.value
                            ),
                    },
                }));
                break;
            case "phone":
                setStep1Data(prevState => ({
                    ...prevState,
                    phone: {
                        value: prevState.phone.value,
                        isValid:
                            /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
                                prevState.phone.value
                            ),
                    },
                }));
                break;
            case "all":
                validateFields("name");
                validateFields("email");
                validateFields("phone");
        }
    }

    function nameChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setStep1Data(prevState => ({
            ...prevState,
            name: {
                value: e.target.value,
                isValid: prevState.name.isValid,
            },
        }));
    }

    function emailChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setStep1Data(prevState => ({
            ...prevState,
            email: {
                value: e.target.value.trim(),
                isValid: prevState.email.isValid,
            },
        }));
    }

    function phoneChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setStep1Data(prevState => ({
            ...prevState,
            phone: {
                value: e.target.value.trim(),
                isValid: prevState.phone.isValid,
            },
        }));
    }

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
                            className={`text-lg text-marine-blue`}
                            htmlFor="name"
                        >
                            Name
                        </label>

                        <span
                            className={
                                "text-base font-bold text-strawberry-red"
                            }
                            aria-label={"error-message"}
                        >
                            {nameIsValid === false && "Field value is Invalid"}
                        </span>
                    </div>
                    <input
                        id={"name"}
                        className={`mt-2 w-full rounded-lg border-2 border-gray-300 p-3 px-5 text-xl font-bold text-marine-blue hover:border-purplish-blue focus:border-purplish-blue focus:outline-none ${
                            nameIsValid === false &&
                            "border-2 border-strawberry-red bg-rose-100"
                        }`}
                        type="text"
                        required
                        value={step1Data.name.value}
                        placeholder={"e.g. Vanessa Mint"}
                        onBlur={validateFields.bind(null, "name")}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div>
                    <div className={"flex justify-between"}>
                        <label
                            className={`text-lg text-marine-blue `}
                            htmlFor={"email"}
                        >
                            Email Address
                        </label>

                        <span
                            className={
                                "text-base font-bold text-strawberry-red"
                            }
                            aria-label={"error-message"}
                        >
                            {emailIsValid === false && "Field value is Invalid"}
                        </span>
                    </div>
                    <input
                        id={"email"}
                        className={`mt-2 w-full rounded-lg border-2 border-gray-300 p-3 px-5 text-xl font-bold text-marine-blue hover:border-purplish-blue focus:border-purplish-blue focus:outline-none ${
                            emailIsValid === false &&
                            "border-2 border-strawberry-red bg-rose-100"
                        }`}
                        type="email"
                        value={step1Data.email.value}
                        required
                        placeholder={"e.g. vanessamint@gmail.com"}
                        onBlur={validateFields.bind(null, "email")}
                        onChange={emailChangeHandler}
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
                            className={`text-base font-bold text-strawberry-red `}
                            aria-label={"error-message"}
                        >
                            {phoneIsValid === false && "Field value is Invalid"}
                        </span>
                    </div>
                    <input
                        id={"phoneNum"}
                        className={`mt-2 w-full rounded-lg border-2 border-gray-300 p-3 px-5 text-xl font-bold text-marine-blue hover:border-purplish-blue focus:border-purplish-blue focus:outline-none ${
                            phoneIsValid === false &&
                            "border-2 border-strawberry-red bg-rose-100"
                        }`}
                        type="tel"
                        required
                        value={step1Data.phone.value}
                        placeholder={"e.g. +1 234 567 890"}
                        onBlur={validateFields.bind(null, "phone")}
                        onChange={phoneChangeHandler}
                    />
                </div>
            </fieldset>
        </div>
    );
}
