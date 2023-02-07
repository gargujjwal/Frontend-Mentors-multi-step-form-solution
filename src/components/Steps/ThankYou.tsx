import thankYouIcon from "../../assets/images/icon-thank-you.svg";
import ThankYouProps from "../../types/props/thank-you-props";

export default function ThankYou(props: ThankYouProps): JSX.Element {
    console.log(props.userData);
    return (
        <div
            className={
                "mt-20 flex flex-col text-center sm:gap-6 xl:gap-10 xl:px-20"
            }
        >
            <div
                className={
                    "mx-auto rounded-full sm:h-1/4 sm:w-1/4 xl:h-2/5 xl:w-2/5"
                }
            >
                <img
                    className={"h-full w-full"}
                    src={thankYouIcon}
                    alt="thank-you-icon"
                />
            </div>
            <h1
                className={"font-bold text-marine-blue sm:text-3xl xl:text-6xl"}
            >
                Thank you!
            </h1>
            <p className={"text-gray-400 sm:text-base xl:text-lg"}>
                Thanks for confirming your subscription! We hope you had fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com
            </p>
        </div>
    );
}
