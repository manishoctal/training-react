import {createContext} from 'react';
import Second from './Second';
import Third from './Third';


export const mycontext = createContext();



const Main = ()=> {

    return (
        <>
            <h4>From the Main Component</h4>
            <mycontext.Provider value={{name: 'octal'}}>
                <Second />
                <Third />
            </mycontext.Provider>
            
        </>
    )
}

export default Main;