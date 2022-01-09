import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button ,{ ButtonType } from '../Componets/Common/Button/Button';
import InputBox from '../components/common/InputBox/InputBox';
import * as yup from 'yup';
import { Form , FormikProvider, useFormik } from 'formik';

function Appoinment(props) {
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
            .required('messege is must required'),
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
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orcifg, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
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
                                            // data-msg="Please enter at least 4 chars" 
                                            {...getFieldProps("name")}
                                            errors={Boolean(errors.name)}
                                            errorMessage={errors.name}
                                        />
                                        {/* <div className="validate" /> */}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <InputBox 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Your Email" 
                                            data-rule="email" 
                                            // data-msg="Please enter a valid email" 
                                            {...getFieldProps("email")}
                                            errors={Boolean(errors.email)}
                                            errorMessage={errors.email}
                                        />
                                        {/* <div className="validate" /> */}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <InputBox 
                                            type="tel" 
                                            className="form-control" 
                                            name="phone" 
                                            id="phone" 
                                            placeholder="Your Phone" 
                                            data-rule="minlen:4" 
                                            // data-msg="Please enter at least 4 chars" 
                                            {...getFieldProps("phone")}
                                            errors={Boolean(errors.phone)}
                                            errorMessage={errors.phone}
                                        />
                                        {/* <div className="validate" /> */}
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
                                            // data-msg="Please enter at least 4 chars" 
                                            {...getFieldProps("date")}
                                            errors={Boolean(errors.date)}
                                            errorMessage={errors.date}
                                        />
                                        {/* <div className="validate" /> */}
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select 
                                            name="department" 
                                            id="department" 
                                            className="form-select"
                                            {...getFieldProps("department")}
                                            errors={Boolean(errors.department)}
                                            errorMessage={errors.department}
                                        >
                                            <option value="0">Select Department</option>
                                            <option value="Department 1">Department-1</option>
                                            <option value="Department 2">Department-2</option>
                                            <option value="Department 3">Department-3</option>
                                        </select>
                                        {/* <div className="validate" /> */}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea 
                                        className="form-control" 
                                        name="message" 
                                        rows={5} 
                                        id="message"
                                        placeholder="Message" 
                                        {...getFieldProps("message")}
                                        errors={Boolean(errors.message)}
                                        errorMessage={errors.message}
                                    />
                                    {/* <div className="validate" /> */}
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

export default Appointment;