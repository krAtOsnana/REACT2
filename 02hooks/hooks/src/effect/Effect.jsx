/**  useEffect()
 * this hook let you perform side effect (or just effect) in function component;
 * eg: data fetching througn api, setting up a subscription etc.
 *  this hook is the combination of may lafecycle methods of class component like:
 * componentDidMount, componentDidUpdate, componentWillUnmount
 * 
 //* react rerender the whole component whenever the state was changed
 */

import { useEffect } from "react";

function Effect(){

/**
 * * this hook will run when the component will mount on the virtual DOM.
 * * {jab component mount hoga DOM me (ya load ho jae browser me)  Tab useEffect Wala hook run hoga apne app}
 * * this kind of useEffect run only one time at the loding of component/mounting of component
 */

//* this useEffect will run only on 1st render
    useEffect(()=>{
        alert("hallow");
    },[])

//* this useEffect will run on every ender
    useEffect(()=>{
    })

//* this useEffect will run on change of cnt;
// useEffect(()=>{             
//     console.log(`cnt has been changed to ${cnt}`);
// },[cnt])

    return(
        <>
        <h1>this is my use effect</h1>
        </>
    );
};
export default Effect;