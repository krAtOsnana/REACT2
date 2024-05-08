function List(){

    let myList = [
        {name:'kushagra',
        year: "3rd",
        back:5,},

        {name: "ritik",
        year:"3rd",
        back:0},

        {name: "shamikh",
        year:"3rd",
        back:0},

        {name: "pragati",
        year:'3rd',
        back:0}
    ];

    myList.sort((a, b)=> a.name.localeCompare(b.name));  //for arranging name in alphabetical order


     let myItems = myList.map((item) =>  <li key={item.name}>{item.name} of {item.year} having {item.back} </li>)

    return(
        <ul>{myItems}</ul>
    );
}
export default List;