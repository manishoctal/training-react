import {useContext} from 'react'; 
import { mycontext } from "./Main";

const Second = (props)=> {

    const myValues = useContext(mycontext); 
    return <h4>From the Second Component: {myValues.name}</h4>
}

export default Second;