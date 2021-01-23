import axios from "axios";
export default {
    axios.get(' "https://randomuser.me/api/"')
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  })
};

// getUsers: function() {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us")
// }