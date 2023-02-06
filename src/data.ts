import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";
import Plan from "./types/plan";
import AddOn from "./types/add-on";

export const steps = [
    { num: 1, desc: "your info" },
    { num: 2, desc: "select plan" },
    { num: 3, desc: "add-ons" },
    { num: 4, desc: "summary" },
];

export const ADD_ONS: AddOn[] = [
    {
        id: "200b2cf6-a577-11ed-b9df-0242ac120003",
        title: "online service",
        desc: "Access to multiplayer games",
        monthlyCost: 1,
        yearlyCost: 10,
    },
    {
        id: "200b2f4e-a577-11ed-b9df-0242ac120003",
        title: "Larger storage",
        desc: "Extra 1TB of cloud save",
        monthlyCost: 2,
        yearlyCost: 20,
    },
    {
        id: "200b30de-a577-11ed-b9df-0242ac120003",
        title: "Customizable Profile",
        desc: "Custom theme on your profile",
        monthlyCost: 2,
        yearlyCost: 20,
    },
];

export const AVAILABLE_PLANS: Plan[] = [
    {
        id: "8B33FA2D16BC7E5D7384FFBEE7A44",
        img: arcadeIcon,
        monthlyCost: 9,
        title: "arcade",
        yearlyCost: 90,
        noOfMonthsFreeOnYear: 2,
    },
    {
        id: "A132479A7B15B9ED294DF515C512C",
        img: advancedIcon,
        monthlyCost: 12,
        title: "advanced",
        yearlyCost: 120,
        noOfMonthsFreeOnYear: 2,
    },
    {
        id: "54B9BE76F9C45D5892FF9F16476B1",
        img: proIcon,
        title: "pro",
        monthlyCost: 15,
        yearlyCost: 150,
        noOfMonthsFreeOnYear: 2,
    },
];
