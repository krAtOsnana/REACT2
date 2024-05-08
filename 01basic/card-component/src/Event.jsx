function Event(){

    const handelClick =() =>{
        console.log("dont Click");
    }

    const handelClick2= (name) =>{
            console.log(`${name} plz dont click me`);
    }

    return(
        <>
            <button onClick={()=>handelClick2("kushara kumar")}>myButton😃</button>
        </>
    );
}
export default Event;