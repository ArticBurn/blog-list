import React, { useState } from 'react'

const Queue = () => {
    const [activity, setActivity] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        return (
            activity === '' ?
                null
                :
                setList([...list, {
                    id: generateId(),
                    act: activity
                }]),
            setActivity('')
        )
        // console.log(list);
    }

    const generateId = () => {
        return (
            Date.now()
        )
    }

    const deleteLists = () => {
        setList([])
    }

    const removeList = (getId) => {
        const filteredList = list.filter((lists) => {
            return (
                lists.id !== getId
            )
        })
        setList(filteredList);
        // console.log(filteredList);
    }

    const editList = (getAct) => {
        const editFilteredList = list.filter((lists) => {
            return (
                lists.act === getAct,
                setActivity(getAct)
            )
        })
        console.log(editFilteredList);
    }

    const targetActivity = (el) => {
        setActivity(el.target.value)
    }
    return (
        <div className="p-4 w-6/12 h-auto mx-auto mb-8 mt-8 rounded-lg bg-gradient-to-b from-cyan-200 to-green-200 drop-shadow-lg">
            <h1 className="mb-2">TODO list</h1>
            <form onSubmit={handleSubmit}>
                <label className="block">Activity :</label>
                <input value={activity} onChange={targetActivity} type="text" name="" className="focus:outline-none focus:ring-2 focus:ring-teal-700 placeholder-shown:border-gray-500 p-2 w-full my-2 mt-0 border-solid border-none rounded-md" placeholder="Your Activity ..." />
                <button htmlFor="my-modal-4" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-2 text-center">
                    Add
                </button>
                <button type="button" onClick={deleteLists} className="text-white bg-red-700 hover:bg-red-800  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-2 text-center">Delete All</button>
            </form>
            <div className="overflow-x-auto bg-white w-full h-auto my-4 rounded-md">
                <table className='table table-zebra w-full'>
                    <thead>
                        <tr>
                            <th className='w-1/12 text-center'>No.</th>
                            <th className='w-6/12'>Activity</th>
                            <th className='w-3/12'>Id</th>
                            <th className='w-2/12 text-center' colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.length === 0 ?
                                <tr>
                                    <td className='whitespace-normal text-center italic' colSpan={3}>No activity in list</td>
                                    <td>
                                        <label htmlFor="my-modal-4" className="btn">open modal</label>
                                    </td>
                                </tr> :
                                list.map((lists, index) => {
                                    return (
                                        <tr className='hover' key={lists.id}>
                                            <th className='text-center'>{index + 1}</th>
                                            <td className='whitespace-normal'>{lists.act}</td>
                                            <td className='whitespace-normal'>{lists.id}</td>
                                            <td>
                                                <button type="submit" onClick={editList.bind(this, lists.act)} className="text-white bg-cyan-700 hover:bg-cyan-800  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-2 text-center">Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" onClick={removeList.bind(this, lists.id)} className="text-white bg-amber-700 hover:bg-amber-800  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-2 text-center">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
            {/* <ul className="m-2 list-disc list-inside">
                {
                    list.map(
                        (lists) => {
                            return (
                                <li>{lists} { }</li>
                            )
                        }
                    )
                }
            </ul> */}
        </div>
    );
}

export default Queue;