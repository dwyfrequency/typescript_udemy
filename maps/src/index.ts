import { User } from "./User";
import { Company } from "./Company";

console.log("hello");
const user = new User();
const company = new Company();

console.log(user);
console.log(company);

new google.maps.Map(document.querySelector("#root"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
