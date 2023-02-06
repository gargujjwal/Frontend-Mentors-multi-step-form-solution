import thankYouIcon from "../assets/images/icon-thank-you.svg";

export default function ThankYou(): JSX.Element {
    return (
        <div className={"mt-20 flex flex-col gap-10 px-20 text-center"}>
            <div className={"mx-auto h-2/5 w-2/5 rounded-full"}>
                <img
                    className={"h-full w-full"}
                    src={thankYouIcon}
                    alt="thank-you-icon"
                />
            </div>
            <h1 className={"text-6xl font-bold text-marine-blue"}>
                Thank you!
            </h1>
            <p className={"text-lg text-gray-400"}>
                Thanks for confirming your subscription! We hope you had fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com
            </p>
        </div>
    );
}
