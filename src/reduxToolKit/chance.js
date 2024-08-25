import { Chance } from "chance";

const chance = Chance();
const fakeUserData = () => chance.name({ middle: true });

export default fakeUserData;
