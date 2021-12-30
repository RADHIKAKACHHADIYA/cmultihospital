import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

import React from 'react';

function List(props) {
    return (
        <div>
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;