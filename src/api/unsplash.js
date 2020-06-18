import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID yaHhDkCD2bst3evL8vA8mm0B3uavUNchk80GjQjMM_o",
  },
});
