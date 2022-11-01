const List = () => {
    const numbers = ["alligator", "snake", "lizard"]
    const showNumbers = numbers.map((number) => <li key={number}>{number} {' '} - array </li>)
    return (
        <div aria-roledescription="list" className="flex justify-center">
        <ul className="list-disc list-inside">
            {showNumbers}
            <li>abc</li>
        </ul>
        </div>
    )
}

export default List;