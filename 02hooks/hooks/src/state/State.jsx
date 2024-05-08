/**
 * react Hooks: special function that allows functional component
 * to use react feacture without writting class component
 * (useState, useEffect, useContext, useRef, useCallback, useMemo, useReducer, customHooks)
 * 
 * 1> useState:
 * this hool allows the creation a statefull variable
 * AND a setter function to update its value in the virtual DOM
 * eg: [name, setName], [count, setCount];
 * 
 *  //* react rerender the whole component whenever the state was changed
 * * jab jab state variable change hoga tab tab component reRender hoga
 * * rerendering me variable ki value ko persisit krne k liye we use useRef() hook

 */

import React,{useState} from "react";
import { useEffect } from "react"

function State ()  {

    let [cnt, setCnt] = useState(0);

    function incCnt(){
        setCnt(cnt+1);
    }
/**
 * *this NOTE for useEffect();
 * 
 * jab bhi cnt ki value change hogi taab tab ye wala hook kaam krega
 * at the time of refresh it print the cnt 2 time
 * this is because of the <React.strictMode> <App/> </React.strictMode>
 * strict mode run the code 2 times
 */
//* this useEffect will run on change of cnt;
    useEffect(()=>{             
        console.log(`cnt has been changed to ${cnt}`);
    },[cnt])

    

    
    

        return(
            <>
                    <div className="cnt">
                    <button onClick={() => cnt === 0 ? setCnt(0) : setCnt(cnt-1) }>dec</button>
                    <h1>{cnt}</h1>
                    <button onClick={incCnt}>inc</button>
                    </div>
            </>
        )
};

export default State;