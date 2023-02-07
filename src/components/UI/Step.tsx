import React from "react";

type StepUIProp = {
    className?: string;
    children: React.ReactNode[];
};
export default function Step(props: StepUIProp): JSX.Element {
    return (
        <div
            className={`z-10 sm:m-4 sm:mt-32 sm:rounded-md sm:bg-white sm:px-6 sm:pt-8 sm:pb-12 sm:shadow-xl xl:static xl:relative xl:mt-0 xl:min-w-[55rem] xl:py-10 xl:pl-28 xl:shadow-none ${props.className}`}
        >
            {props.children}
        </div>
    );
}
