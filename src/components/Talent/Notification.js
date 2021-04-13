import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import ReactTimeAgo from 'react-time-ago';
import Aux from '../../hoc/Auxi/Auxi';

const notification = (props) => {
    const checkEmptyNotif = props.notification

    if (checkEmptyNotif.length === 0) {
        return <div className="col-lg-12 py-3 text-center fs-4">
            <b>Nothing yet!</b> <br />
            <small>We'll let you know when something comes up.</small>
        </div>
    }

    let notificationsList = Object.keys(props.notification)
        .map(notifKey => {
            return [...Array(props.notification[notifKey])].map((notification, i) => {
                return <li key={notifKey + i} >
                    <div className="d-flex align-items-center position-relative p-3 py-5 p-sm-5">
                        <div className="notif-profile-wrapper me-4">
                            <img src={notification.from_profile_picture}
                                className="flex-shrink-0 profile-image rounded-pill" alt={notification.from} />
                        </div>
                        <div className="notification-message flex-grow-1 text-truncate">
                            <h5 className="mt-0 fs-2">Erfan</h5>
                            <p className=" text-truncate d-block font-ave-book w-100 fs-5" style={{ maxWidth: '820px' }}>
                                {notification.message || <Skeleton />}
                            </p>
                            <Link className="stretched-link" to="/alert-messages"></Link>
                        </div>
                        <div className="align-self-start notif-date-wrapper white-space-nowrap">
                            <span className="font-ave-book me-2 fs-5">
                                {notification.message_date ? <ReactTimeAgo date={new Date(notification.message_date)} locale="en-US" /> : null}
                            </span>
                            <svg width="23px" height="20px" viewBox="0 0 23 28" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="#58585aff">
                                    <path fill="#58585a" opacity="1.00"
                                        d=" M 0.00 0.00 L 2.55 0.00 C 9.43 4.35 16.19 8.90 23.00 13.37 L 23.00 14.57 C 16.26 19.15 9.42 23.58 2.57 28.00 L 0.00 28.00 L 0.00 26.06 C 5.75 21.92 11.69 18.06 17.49 14.00 C 11.69 9.94 5.75 6.07 0.00 1.94 L 0.00 0.00 Z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </li>
            });
        })
    return (
        <Aux>
            {notificationsList}
        </Aux>
    );
};

export default notification;