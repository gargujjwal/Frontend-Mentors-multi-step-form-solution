import UserData from "../user-data";
import { FormEvent } from "react";

type MultiStepFormProps = {
    step?: number;
    userData: UserData;
    onStep1Change: (data: {
        name: string;
        email: string;
        phoneNum: string;
    }) => void;
    onStep2Change: (data: { planID: string; planType: "m" | "y" }) => void;
    onStep3Change: (data: { addOnIDs: Set<string> }) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
export default MultiStepFormProps;
