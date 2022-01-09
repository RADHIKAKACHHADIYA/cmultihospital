import React from 'react';
import Button, { ButtonType } from '../components/common/button/Button';
import InputBox from '../components/common/InputBox/InputBox';
import * as yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';

function Contact(props) {

    let messageSchema = {
        name: yup.string()
            .required('Name is must required'),
        email: yup.string()
            .required('E-mail is must required')
            .email('Invalid E-mail'),
        subject: yup.string()
            .required('Subject is must required'),
        message: yup.string()
            .required('Message is must required'),
    }

    let schema = yup.object().shape(messageSchema);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleSubmit, errors, getFieldProps } = formik;

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enimmn orci, vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-506, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <FormikProvider value={formik}>
                                <Form onSubmit={handleSubmit}>
                                    <div className="php-email-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <InputBox
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    {...getFieldProps("name")}
                                                    errors={Boolean(errors.name)}
                                                    errorMessage={errors.name}
                                                />
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <InputBox
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    {...getFieldProps("email")}
                                                    errors={Boolean(errors.email)}
                                                    errorMessage={errors.email}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <InputBox
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject"
                                                {...getFieldProps("subject")}
                                                errors={Boolean(errors.subject)}
                                                errorMessage={errors.subject}
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                {...getFieldProps("message")}
                                                errors={Boolean(errors.message)}
                                                errorMessage={errors.message}
                                            />
                                        </div>
                                        {/* <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div> */}
                                        <div className="text-center mb-5">
                                            <Button buttonType={ButtonType.PRIMARY} type="submit">Send Message</Button>
                                        </div>
                                    </div>
                                </Form>
                            </FormikProvider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;