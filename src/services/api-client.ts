import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params :{
        key : 'a57d137394234e90884b8c676c516e10'
    }

    })

