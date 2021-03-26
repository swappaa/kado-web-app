import React from 'react';
import { Modal } from "react-bootstrap";

import Aux from '../../../hoc/Auxi/Auxi';

const ModalXL = props => {
    return (
        <Aux>
            <Modal
                show={props.show}
                backdrop="static"
                keyboard={false}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}>
                {props.children}
            </Modal>
        </Aux>
    );
};

export default React.memo(
    ModalXL,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);
