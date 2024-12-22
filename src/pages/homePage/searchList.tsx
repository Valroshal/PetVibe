import React, { ChangeEvent, useState } from 'react';

const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli Fruit",
    "Watermelon",
];

const SearchList = () => {

    const [query, setQuery] = useState('');
    const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

    const filteredFruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(query.toLowerCase())
      );

    const handleFruit = (fruit: string) => setSelectedFruit(fruit);

    const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
        setSelectedFruit('')
    }

    return(
        <div>
            <input
                value={query}
                onChange={handleOnchange}
            />
            <ul>
                {
                    filteredFruits.length === 0 ?
                    <p>No such fruit in the list</p> 
                :
                    filteredFruits.map((fruit) => (
                        <li key={fruit} onClick={() => handleFruit(fruit)}>{fruit}</li>
                    ))
                }
            </ul>
            {
            selectedFruit && <p>{selectedFruit}</p>}
        </div>
    );
};

export default SearchList;