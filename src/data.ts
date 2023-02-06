import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

export const steps: { num: number; desc: string }[] = [
    { num: 1, desc: "your info" },
    { num: 2, desc: "select plan" },
    { num: 3, desc: "add-ons" },
    { num: 4, desc: "summary" },
];

export interface AddOnsOption {
    id: string;
    title: string;
    desc: string;
    cost: number;
}

export const AddOns: AddOnsOption[] = [
    {
        id: "200b2cf6-a577-11ed-b9df-0242ac120003",
        title: "online service",
        desc: "Access to multiplayer games",
        cost: 1,
    },
    {
        id: "200b2f4e-a577-11ed-b9df-0242ac120003",
        title: "Larger storage",
        desc: "Extra 1TB of cloud save",
        cost: 2,
    },
    {
        id: "200b30de-a577-11ed-b9df-0242ac120003",
        title: "Customizable Profile",
        desc: "Custom theme on your profile",
        cost: 2,
    },
];

export interface Plan {
    imgPath: string;
    title: string;
    cost: number;
}

export const availablePlans: Plan[] = [
    {
        imgPath: arcadeIcon,
        cost: 9,
        title: "arcade",
    },
    {
        imgPath: advancedIcon,
        cost: 12,
        title: "advanced",
    },
    {
        imgPath: proIcon,
        title: "pro",
        cost: 15,
    },
];
