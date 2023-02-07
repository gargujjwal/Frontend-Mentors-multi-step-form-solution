import { FormEvent, useState } from "react";
import Attribution from "./Attribution";
import MultiStepForm from "./MultiStepForm";
import UserData from "../types/user-data";

function App() {
    const [userData, setUserData] = useState<UserData>({
        name: "",
        email: "",
        phoneNum: "",
        planID: "",
        planType: "m",
        addOnIDs: [],
    });

    // setInterval(() => console.log(userData), 5000);

    function step1ChangeHandler(data: {
        name: string;
        email: string;
        phoneNum: string;
    }): void {
        setUserData(prevState => ({ ...prevState, ...data }));
    }

    function step2ChangeHandler(data: {
        planID: string;
        planType: "m" | "y";
    }): void {
        setUserData(prevState => ({ ...prevState, ...data }));
    }

    function step3ChangeHandler(data: { addOnIDs: Set<string> }): void {
        setUserData(prevState => ({
            ...prevState,
            addOnIDs: [...data.addOnIDs],
        }));
    }

    function formSubmitHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.dir(userData);
    }

    return (
        <div
            className={"flex h-screen flex-col gap-4 bg-magnolia object-cover"}
        >
            <div className={"flex-1 xl:px-40 xl:py-20"}>
                <MultiStepForm
                    userData={userData}
                    onStep1Change={step1ChangeHandler}
                    onStep2Change={step2ChangeHandler}
                    onStep3Change={step3ChangeHandler}
                    onSubmit={formSubmitHandler}
                />
            </div>
            <Attribution />
        </div>
    );
}

export default App;
