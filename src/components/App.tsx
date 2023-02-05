import { useState } from "react";
import Attribution from "./Attribution";
import ThankYou from "./ThankYou";
import MultiStepForm from "./MultiStepForm";

function App() {
    const [stepNum, setStepNum] = useState<number>(1);

    return (
        <div className={"flex h-screen flex-col gap-4 bg-magnolia"}>
            <div className={"flex-1 md:px-20 md:py-12"}>
                <MultiStepForm />
            </div>
            <Attribution />
        </div>
    );
}

export default App;
