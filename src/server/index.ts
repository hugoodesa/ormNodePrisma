import api from '../api';

const port : number = 3333

api.listen(port,()=>{

    console.log(`server running on http://localhost:${port}`)

})