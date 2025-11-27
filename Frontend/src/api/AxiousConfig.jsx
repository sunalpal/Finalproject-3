import axios from "axios"


const Apiconfig=axios.create({

    baseURL:"https://localhost:3000/",
})


export default Apiconfig;