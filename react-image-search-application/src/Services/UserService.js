import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID eoUkch4UUZpgAdsbRtdP9UON7dlMAmK4UxdyPro6R9I"
      }
});

