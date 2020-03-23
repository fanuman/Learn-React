import React from 'react';
import Person from './Lec_7_Person';

function PersonList(props) {

    const persons = [
        {
            id: 1,
            name: "Numan",
            age: 20,
            skill: "C++"
        },
        {
            id: 2,
            name: "Shayan",
            age: 21,
            skill: "Unity"
        },
        {
            id: 3,
            name: "Saqib",
            age: 21,
            skill: "ML"
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)


    return (
        <div>
            {personList}
        </div>


    );
}

export default PersonList;