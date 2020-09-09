export const people =[
    {
        id:0,
        name: "seonggul",
        age: 25,
        gender: "male"
    },{
        id:1,
        name: "bohwa",
        age: 30,
        gender: "female"
    },{
        id:2,
        name: "jahyo",
        age: 28,
        gender: "female"
    },{
        id:3,
        name: "sangjun",
        age: 27,
        gender: "male"
    }
];

export const getById = id =>{
    const filteredPeople = people.filter(person => person.id === id );
    return filteredPeople[0]; 
}
