import React from "react";
import { Col } from "reactstrap";

const BottomTextValue = (props) => {
    const { text } = props;

    return (
        <>
            {text.map((val, key) => {
                return (
                    <Col lg={6} md={6} sm={6} key={key}>
                        <div className="first-progress-text-container">
                            <div className={`first-progress-text ${val.className}`} />
                            {val.price}
                        </div>
                    </Col>
                )
            })}
        </>
    )
};

export default BottomTextValue;