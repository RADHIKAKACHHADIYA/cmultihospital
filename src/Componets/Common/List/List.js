import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";


function List({ data }) {
    return (
            <Card className="border mb-5 mx-4 col-3 ">
                <CardBody>
                    {
                        data.name !== undefined ?
                            <CardTitle tag="h5">
                                Name : {data.name}
                            </CardTitle>
                        : null
                    }

                    {
                        data.price !== undefined ?
                            <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                               Price : {data.price}
                            </CardSubtitle>
                        : null
                        
                    }
                    {
                        data.quantity && data.expiry !== undefined ?
                            <CardText>
                                Quantity : {data.quantity} <br />
                                Expiry : {data.expiry}
                            </CardText>
                        : null
                    }
                    
                   
                </CardBody>
            </Card>
            );
}

            export default List;