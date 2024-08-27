function List() {
    const fruits = [
        { id: 1, name: "app", cal: 250 },
        { id: 2, name: "ban", cal: 36 },
        { id: 3, name: "gap", cal: 360 },
    ];

    const listItems = fruits.map(fruit => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.cal}</b>
        </li>
    ));

    return (
        <ol>
            {listItems}
        </ol>
    );
}

export default List;
