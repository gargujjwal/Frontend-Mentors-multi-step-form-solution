export default interface UserData {
    name: string;
    email: string;
    phoneNum: string;
    planID: string;
    planType: "m" | "y";
    addOnIDs: string[];
}
