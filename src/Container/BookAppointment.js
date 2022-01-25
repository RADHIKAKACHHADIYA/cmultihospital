import React from 'react';
import Button ,{ ButtonType } from '../Componets/Common/Button/Button';
import InputBox from '../Componets/Common/Input/InputBox';
import * as yup from 'yup';
import { Form , FormikProvider, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

function BookAppointment(props) {
    let AppoinmentSchema = {
        name: yup.string()
            .required('Username is must required'),
        email: yup.string()
            .required('E-mail is must required')
            .email('Invalid email address'),
        phone: yup.number()
            .min(10, 'Phone number should be 10 digit number')
            .required('Mobile number is must required'),
        date: yup.date()
            .required('Appointment date is must required'),
        message: yup.string()
            .required('messege is must required'),
        department: yup.string()
            .required('department is must required'),
    }

    let schema = yup.object().shape(AppoinmentSchema);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            message: '',
            department: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleSubmit, errors, getFieldProps} = formik;
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
                    <div activeclassName="active">
                        <NavLink/>
                    </div>
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <div className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <InputBox 
                                            type="text" 
                                            name="name" 
                                            className="form-control" 
                                            id="name" 
                                            placeholder="Your Name" 
                                            data-rule="minlen:4" 
                                            {...getFieldProps("name")}
                                            errors={Boolean(errors.name)}
                                            errorMessage={errors.name}
                                        />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <InputBox 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Your Email" 
                                            data-rule="email" 
                                            {...getFieldProps("email")}
                                            errors={Boolean(errors.email)}
                                            errorMessage={errors.email}
                                        />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <InputBox 
                                            type="tel" 
                                            className="form-control" 
                                            name="phone" 
                                            id="phone" 
                                            placeholder="Your Phone" 
                                            data-rule="minlen:4" 
                                            {...getFieldProps("phone")}
                                            errors={Boolean(errors.phone)}
                                            errorMessage={errors.phone}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <InputBox 
                                            type="datetime" 
                                            name="date" 
                                            className="form-control datepicker" 
                                            id="date" 
                                            placeholder="Appointment Date" 
                                            data-rule="minlen:4" 
                                            {...getFieldProps("date")}
                                            errors={Boolean(errors.date)}
                                            errorMessage={errors.date}
                                        />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <InputBox 
                                            name="department" 
                                            id="department" 
                                            type="select"
                                            className="form-select"
                                            {...getFieldProps("department")}
                                            errors={Boolean(errors.department)}
                                            errorMessage={errors.department}
                                        >
                                            <option value="0">Select Department</option>
                                            <option value="Department 1">Department-1</option>
                                            <option value="Department 2">Department-2</option>
                                            <option value="Department 3">Department-3</option>
                                        </InputBox>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <InputBox 
                                        className="form-control" 
                                        name="message" 
                                        type="textarea"
                                        id="message"
                                        placeholder="Message" 
                                        {...getFieldProps("message")}
                                        errors={Boolean(errors.message)}
                                        errorMessage={errors.message}
                                    />
                                </div>
                                {/* <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div> */}
                                <div className="text-center">
                                    <Button buttonType={ButtonType.PRIMARY} type="submit">
                                        Make an Appointment
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </FormikProvider>
                </div>
            </section>
        </div>
    );
}

export default BookAppointment;
