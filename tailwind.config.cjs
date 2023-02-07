/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                "sm": "375px",
                "xl": "1280px"
            },
            fontFamily: {
                body: ["Ubuntu", "sans-serif"]
            },
            colors: {
                "light-marine-blue": "hsl(213, 96%, 28%)",
                "marine-blue": "hsl(213, 96%, 18%)",
                "purplish-blue": "hsl(243, 100%, 62%)",
                "light-purplish-blue": "hsl(243, 100%, 82%)",
                "pastel-blue": "hsl(228, 100%, 84%)",
                "light-blue": "hsl(206, 94%, 87%)",
                "strawberry-red": "hsl(354, 84%, 57%)",
                "cool-gray": "hsl(215,81%,96%)",
                "light-gray": "hsl(229, 24%, 87%)",
                "magnolia": "hsl(217, 100%, 97%)",
                "alabaster": "hsl(231, 100%, 99%)",
                "white": "hsl(0, 0%, 100%)",
                "attribution-color": "hsl(228, 45%, 44%)"
            },
            backgroundImage: {
                "sidebar-desktop": "url(/public/images/bg-sidebar-desktop.svg)",
                "sidebar-mobile": "url(/public/images/bg-sidebar-mobile.svg)"
            }
        }
    },
    plugins: [require("prettier-plugin-tailwindcss")]
};
