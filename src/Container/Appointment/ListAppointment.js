import React, { useEffect, useState } from 'react';
import Button, { ButtonType } from '../../Componets/Common/Button/Button';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function ListAppointment(props) {
    const [data, setData] = useState();
    useEffect(
        () => {
            loadData()
        },
        [])
    let loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"))

        setData(localData)
    }
    const handleDelet = (id) => {
        let localdata = JSON.parse(localStorage.getItem("appointment"))
        const fData = localdata.filter((d) => d.id !== id)
        localStorage.setItem("appointment", JSON.stringify(fData))


        loadData()
    }
    let history = useHistory();

    const handleEdit = (id) => {
        let localData = JSON.parse(localStorage.getItem("appointment"))
        let filterData = localData.filter((l) => l.id === id)
        history.push("/bookAppointment", filterData[0])
    }


    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Appointment</h2>
                        <p>Aenean enim orcifg, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <NavLink to="/bookAppointment" activeClassName="actactive fw-bold">
                                Book Appointment
                            </NavLink>
                        </div>
                        <div className='col-6 text-center mb-5'>
                            <NavLink to="/listAppointment" activeClassName="actactive fw-bold">
                                List Appointment
                            </NavLink>
                        </div>
                        <div className='row '>
                            {
                                data !== undefined ?
                                    data.map((d, i) => {
                                        return (
                                            <div
                                                className='col-4 mb-4'
                                                key={i}
                                            >
                                                <Card
                                                >
                                                    <CardBody >
                                                        <div className='ps-2'>
                                                            <CardTitle
                                                                tag="h5"
                                                                className='pb-2'
                                                            >
                                                                Name : {d.name}
                                                            </CardTitle>
                                                            <CardSubtitle
                                                                className="pb-3 text-muted"
                                                                tag="h6"
                                                            >
                                                                email : {d.email}
                                                            </CardSubtitle>
                                                            <CardSubtitle
                                                                className="pb-3 text-muted"
                                                                tag="h6"
                                                            >
                                                                phone : {d.phone}
                                                            </CardSubtitle>
                                                            <CardSubtitle
                                                                className="pb-2 text-muted"
                                                                tag="h6"
                                                            >
                                                                date : {d.date}
                                                            </CardSubtitle>
                                                            <CardText
                                                                className="text-muted"
                                                            >
                                                                message : {d.message}
                                                            </CardText>
                                                        </div>
                                                        <Button buttonType={ButtonType.LINK}
                                                            onClick={() => handleDelet(d.id)}
                                                            className="text-danger me-2 "                                                       >
                                                            Delet
                                                        </Button>
                                                        <Button buttonType={ButtonType.LINK} onClick={() => handleEdit(d.id)}>
                                                            Edit
                                                        </Button>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        )
                                    }) : null
                            }
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ListAppointment;