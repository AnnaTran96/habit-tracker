import React from 'react';
import AddNewCard from '../components/AddNewCard'
import NavBar from '../components/NavBar'

const AddNew = () => {
    return (
        <>
            <h3 className="logo">Habitory</h3>
            <NavBar/>
            <h1 className='addNew-title'>Add New</h1>
            <AddNewCard/>
        </>
    )
}

export default AddNew;