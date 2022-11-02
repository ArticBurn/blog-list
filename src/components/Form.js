import React, { useRef,useState } from 'react'

const Form = () => {
    const nameRef = useRef(null)
    const [_default, setDefault] = useState('')
    const [inputName, setInputName] = useState('')
    const [headingName, setHeadingName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameValue = nameRef.current.value
        setInputName(nameValue)
        setDefault('')
    }

    const handleChange = (event) => {
        setHeadingName(event.target.value)
        setDefault(nameRef.current.value)
    }

    console.log(inputName);
    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg my-8">
            <form onSubmit={handleSubmit}>
                <label className="block" htmlFor="lname">Name :</label>
                <input ref={nameRef} value={_default} onChange={handleChange} type="text" name="name" className="placeholder-shown:border-gray-500 p-2 w-full my-2 border-solid border-2" placeholder="Your Name" />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <h1 className='py-2 pl-2' >{headingName}</h1>
                <input disabled value={inputName} type="text" name="handleName" className="placeholder-shown:border-gray-500 p-2 w-full my-2 border-solid border-2" placeholder="handleChange" />
            </form>
        </div>
    )
}

export default Form;