import React from 'react';
import { Modal } from "react-bootstrap";

import Aux from '../../../hoc/Auxi/Auxi';

const ModalXS = props => {
    return (
        <Aux>
            <Modal
                show={props.show}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}>
                {props.children}
            </Modal>
        </Aux>
    );
};

export default React.memo(
    ModalXS,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);
