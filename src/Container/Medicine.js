// https://github.com/RADHIKAKACHHADIYA/cmultihospital.git
import React, { useEffect, useState } from 'react';
import List from '../Componets/Common/List/List';
import InputBox from '../Componets/Common/Input/InputBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmedicine } from '../redux/actions/medicine.action';
import Loder from '../Componets/Common/Loader/Loder';

// const orgData = [

//     {
//         id: 101,
//         name: 'Abacavir',
//         quantity: 25,
//         price: 150,
//         expiry: 2022
//     },
//     {
//         id: 102,
//         name: 'Eltrombopag',
//         quantity: 90,
//         price: 550,
//         expiry: 2021
//     },
//     {
//         id: 103,
//         name: 'Meloxicam',
//         quantity: 85,
//         price: 450,
//         expiry: 2025
//     },
//     {
//         id: 104,
//         name: 'Allopurinol',
//         quantity: 50,
//         price: 600,
//         expiry: 2023
//     },
//     {
//         id: 105,
//         name: 'Phenytoin',
//         quantity: 63,
//         price: 250,
//         expiry: 2021
//     },
// ]

function Medicine(props) {
    const [filterData, setFilterData] = useState()
    const [sortData, setSortData] = useState()
    const [sortValue, setSortValue] = useState()

    const dispatch = useDispatch();
    const medicine = useSelector(state => state.medicine)
    console.log(medicine)
    useEffect(
        () => {
            dispatch(fetchmedicine())
        },
        [])

    const handleSearch = (s) => {
        if (s !== "") {
            let fData = medicine.medicine.filter((m) => (
                m.name.toString().toLowerCase().includes(s.toLowerCase(s)) ||
                m.quantity.toString().includes(s) ||
                m.price.toString().includes(s) ||
                m.expiry.toString().includes(s)
            ))
            setFilterData(fData);
        } else {
            setFilterData();
            handlesort(sortValue, true);
        }
    }


    const handlesort = (sl, empty = false) => {

        let sortValue = !empty && filterData ? filterData : medicine.medicine
        setSortValue(sl)

        if (sl !== "0") {
            let sData = sortValue.sort((s, b) => {
                if (sl === "lh") {
                    return s.price - b.price
                } else if (sl === "hl") {
                    return b.price - s.price
                } else if (sl === "q") {
                    return s.quantity - b.quantity
                } else if (sl === "e") {
                    return s.expiry - b.expiry
                }
            })
            setSortData([...sData])
        }

    }
    let finalData = filterData ? filterData : sortData ? sortData : medicine.medicine
    return (
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>Medicine</h2>
                </div>
                <div className='row'>
                    <div className="col-6 mb-5">
                        <InputBox
                            onChange={(i) => handleSearch(i.target.value)}
                            placeholder="Search Here..."
                        />
                    </div>
                    <div className="col-6 mb-5">
                        <InputBox
                            onChange={(i) => handlesort(i.target.value)}
                            type="select"
                        >
                            <option value="0">--select--</option>
                            <option value="lh">Price: Low to High</option>
                            <option value="hl">Price: High to to  Low</option>
                            <option value="q">Quantity</option>
                            <option value="e">Expiry</option>
                        </InputBox>
                    </div>
                </div>
                {
                    !medicine.isLoading ?
                    medicine.errMessage === true && finalData !== undefined ?
                        finalData.map((d) => {
                            return (
                                <List key={d.id.toString()} data={d} />
                            )
                        })
                        : <p className='text-center text-danger fw-bold'> something went wrong</p>
                    : <Loder />
                }
            </div>
        </div>
    );
}

export default Medicine;