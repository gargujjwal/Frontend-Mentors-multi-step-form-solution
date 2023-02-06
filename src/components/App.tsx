import { useState } from "react";
import Attribution from "./Attribution";
import MultiStepForm from "./MultiStepForm";

interface UserData {
    name: string;
    email: string;
    phoneNum: string;
    planID: string;
    planType: "monthly" | "yearly";
    addOnsIDs: string[];
}

function App() {
    const [stepNum, setStepNum] = useState<number>(0);
    const [data, setData] = useState<UserData>({
        name: "",
        email: "",
        phoneNum: "",
        planID: "",
        planType: "monthly",
        addOnsIDs: [],
    });

    function updateStepNum(action: "INCREMENT" | "DECREMENT"): void {
        let toAdd = 0;
        switch (action) {
            case "INCREMENT":
                toAdd = 1;
                break;
            case "DECREMENT":
                toAdd = -1;
        }

        setStepNum(prevState => prevState + toAdd);
    }

    return (
        <div
            className={"flex h-screen flex-col gap-4 bg-magnolia object-cover"}
        >
            <div className={"flex-1 md:px-40 md:py-20"}>
                <MultiStepForm
                    currStep={stepNum}
                    onStepChange={updateStepNum}
                />
            </div>
            <Attribution />
        </div>
    );
}

export default App;
