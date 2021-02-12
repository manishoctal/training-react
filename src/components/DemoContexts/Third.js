import {useContext} from 'react';

import { mycontext } from "./Main";
const Third = (props)=> {

    const myValues = useContext(mycontext); 
    return <h4>From the Third Component: {myValues.name}</h4>
}

export default Third;