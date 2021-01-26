import axios from "axios";

// function API () {
//     return(
//       axios.get("https://randomuser.me/api/?results=50")
//     ) 
//   }



export default {
   theAPI: function(){
     return axios.get("https://randomuser.me/api/?results=200&nat=us")
   }
};

// export default {
//     axios("https://randomuser.me/api/")
//  ((response) => {
//     console.log(response);
//   }, (error) => {
//     console.log(error);
//   })
// };

// getUsers: function() {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us")
// }
