import UserData from "../user-data";

export default interface StepProps {
    userData: UserData;
    onChange?: (data: any) => void;
    onFormStepChange: (
        action: "INCREMENT" | "DECREMENT",
        setTo?: number
    ) => void;
}

export interface Step1Props extends StepProps {
    onChange?: (data: {
        name: string;
        email: string;
        phoneNum: string;
    }) => void;
}

export interface Step2Props extends StepProps {
    onChange?: (data: { planID: string; planType: "m" | "y" }) => void;
}

export interface Step3Props extends StepProps {
    onChange?: (data: { addOnIDs: Set<string> }) => void;
}
