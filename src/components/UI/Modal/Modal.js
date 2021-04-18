import React from 'react';
import { Modal } from "react-bootstrap";

import Aux from '../../../hoc/Auxi/Auxi';

const modal = props => {
    return (
        <Aux>
            <Modal
                show={props.show}
                backdrop={true}
                onHide={props.hide}
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
    modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);
