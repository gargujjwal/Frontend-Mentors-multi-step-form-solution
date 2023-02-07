import StepHeader from "../StepHeader";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import StepFooter from "../StepFooter";
import { Step1Props } from "../../types/props/step-props";
import {
    validateEmail,
    validateName,
    validatePhoneNumber,
} from "../../utility/validators";

type Step1Data = {
    name: { value: string; isValid: boolean | null };
    email: { value: string; isValid: boolean | null };
    phoneNum: { value: string; isValid: boolean | null };
};

type ActionType =
    | { type: "USER_INPUT_NAME"; payload: string }
    | { type: "USER_INPUT_EMAIL"; payload: string }
    | { type: "USER_INPUT_PHONE_NUM"; payload: string }
    | { type: "INPUT_NAME_BLUR" }
    | { type: "INPUT_EMAIL_BLUR" }
    | { type: "INPUT_PHONE_NUM_BLUR" };

function step1Reducer(previousState: Step1Data, action: ActionType): Step1Data {
    switch (action.type) {
        case "USER_INPUT_NAME":
            return {
                ...previousState,
                name: {
                    value: action.payload,
                    isValid: previousState.name.isValid,
                },
            };
        case "USER_INPUT_EMAIL":
            return {
                ...previousState,
                email: {
                    value: action.payload,
                    isValid: previousState.email.isValid,
                },
            };
        case "USER_INPUT_PHONE_NUM":
            return {
                ...previousState,
                phoneNum: {
                    value: action.payload,
                    isValid: previousState.phoneNum.isValid,
                },
            };
        case "INPUT_NAME_BLUR":
            return {
                ...previousState,
                name: {
                    value: previousState.name.value,
                    isValid: validateName(previousState.name.value),
                },
            };
        case "INPUT_EMAIL_BLUR":
            return {
                ...previousState,
                email: {
                    value: previousState.email.value,
                    isValid: validateEmail(previousState.email.value),
                },
            };
        case "INPUT_PHONE_NUM_BLUR":
            return {
                ...previousState,
                phoneNum: {
                    value: previousState.phoneNum.value,
                    isValid: validatePhoneNumber(previousState.phoneNum.value),
                },
            };
    }
}

export default function Step1(props: Step1Props): JSX.Element {
    const { name, email, phoneNum } = props.userData;
    const [step1Data, dispatchStep1Data] = useReducer(step1Reducer, {
        name: {
            value: name,
            isValid: name.length === 0 ? null : validateName(name),
        },
        email: {
            value: email,
            isValid: email.length === 0 ? null : validateEmail(email),
        },
        phoneNum: {
            value: phoneNum,
            isValid:
                phoneNum.length === 0 ? null : validatePhoneNumber(phoneNum),
        },
    });
    const [formValidity, setFormValidity] = useState<boolean>(
        () =>
            step1Data.name.isValid! &&
            step1Data.email.isValid! &&
            step1Data.phoneNum.isValid!
    );

    // check for form-validity on change of validity of each field
    useEffect(() => {
        const formValidatorTimeout = setTimeout(
            () =>
                setFormValidity(
                    step1Data.name.isValid! &&
                        step1Data.email.isValid! &&
                        step1Data.phoneNum.isValid!
                ),
            500
        );
        return () => clearTimeout(formValidatorTimeout);
    }, [step1Data.name, step1Data.email, step1Data.phoneNum]);

    function nameChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        dispatchStep1Data({ type: "USER_INPUT_NAME", payload: value });
    }

    function emailChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        dispatchStep1Data({ type: "USER_INPUT_EMAIL", payload: value });
    }

    function phoneChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        dispatchStep1Data({ type: "USER_INPUT_PHONE_NUM", payload: value });
    }

    function step1FormSubmitHandler() {
        props.onChange &&
            props.onChange({
                name: step1Data.name.value,
                email: step1Data.email.value,
                phoneNum: step1Data.phoneNum.value,
            });
        props.onFormStepChange("INCREMENT");
    }

    const {
        name: { isValid: nameValidity },
        phoneNum: { isValid: phoneNumValidity },
        email: { isValid: emailValidity },
    } = step1Data;

    return (
        <div className={"flex flex-col gap-8"}>
            <div className={"sm:flex sm:flex-col"}>
                <StepHeader
                    heading={"Personal info"}
                    headingCaption={
                        "Please provide your name, email address, and phone number."
                    }
                />
                <fieldset
                    className={"flex flex-col sm:mt-5 sm:gap-3 xl:gap-6"}
                    aria-label={"step-1 form"}
                >
                    <div>
                        <div className={"flex justify-between "}>
                            <label
                                className={`text-marine-blue sm:text-sm xl:text-lg`}
                                htmlFor="name"
                            >
                                Name
                            </label>

                            <span
                                className={
                                    "font-bold text-strawberry-red sm:text-sm lg:text-base"
                                }
                                aria-label={"error-message"}
                            >
                                {nameValidity === false &&
                                    "Field value is Invalid"}
                            </span>
                        </div>
                        <input
                            id={"name"}
                            className={`sm:text-md w-full rounded-md border-2 border-gray-300 px-5 font-bold text-marine-blue hover:border-purplish-blue focus:border-purplish-blue focus:outline-none sm:mt-1 sm:py-2 sm:font-semibold xl:mt-2 xl:py-3 xl:text-xl ${
                                nameValidity === false &&
                                "border-2 border-strawberry-red bg-rose-100"
                            }`}
                            type="text"
                            required
                            value={step1Data.name.value}
                            placeholder={"e.g. Vanessa Mint"}
                            onBlur={dispatchStep1Data.bind(null, {
                                type: "INPUT_NAME_BLUR",
                            })}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div>
                        <div className={"flex justify-between"}>
                            <label
                                className={`text-marine-blue sm:text-sm xl:text-lg`}
                                htmlFor={"email"}
                            >
                                Email Address
                            </label>

                            <span
                                className={
                                    "font-bold text-strawberry-red sm:text-sm lg:text-base"
                                }
                                aria-label={"error-message"}
                            >
                                {emailValidity === false &&
                                    "Field value is Invalid"}
                            </span>
                        </div>
                        <input
                            id={"email"}
                            className={`sm:text-md w-full rounded-md border-2 border-gray-300 px-5 font-bold text-marine-blue hover:border-purplish-blue focus:border-purplish-blue focus:outline-none sm:mt-1 sm:py-2 sm:font-semibold xl:mt-2 xl:py-3 xl:text-xl ${
                                emailValidity === false &&
                                "border-2 border-strawberry-red bg-rose-100"
                            }`}
                            type="email"
                            value={step1Data.email.value}
                            required
                            placeholder={"e.g. vanessamint@gmail.com"}
                            onBlur={dispatchStep1Data.bind(null, {
                                type: "INPUT_EMAIL_BLUR",
                            })}
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div>
                        <div className={"flex justify-between"}>
                            <label
                                className={
                                    "text-marine-blue sm:text-sm xl:text-lg"
                                }
                                htmlFor="name"
                            >
                                Phone Number
                            </label>

                            <span
                                className={`font-bold text-strawberry-red sm:text-sm lg:text-base`}
                                aria-label={"error-message"}
                            >
                                {phoneNumValidity === false &&
                                    "Field value is Invalid"}
                            </span>
                        </div>
                        <input
                            id={"phoneNum"}
                            className={`sm:text-md w-full rounded-md border-2 border-gray-300 px-5 font-bold text-marine-blue hover:border-purplish-blue focus:border-purplish-blue focus:outline-none sm:mt-1 sm:py-2 sm:font-semibold xl:mt-2 xl:py-3 xl:text-xl ${
                                phoneNumValidity === false &&
                                "border-2 border-strawberry-red bg-rose-100"
                            }`}
                            type="tel"
                            required
                            value={step1Data.phoneNum.value}
                            placeholder={"e.g. +1 234 567 890"}
                            onBlur={dispatchStep1Data.bind(null, {
                                type: "INPUT_PHONE_NUM_BLUR",
                            })}
                            onChange={phoneChangeHandler}
                        />
                    </div>
                </fieldset>
            </div>

            <StepFooter
                formStep={0}
                blockNextBtn={!formValidity}
                onNextBtnClick={step1FormSubmitHandler}
            />
        </div>
    );
}
