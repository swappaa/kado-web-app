import React from 'react';
import Skeleton from "react-loading-skeleton";

const SkeletonNotification = () => {
    return (
        <li>
            <div className="d-flex align-items-center position-relative p-3 py-5 p-sm-5">
                <div className="notifd-profile-wrapper me-4">
                    <Skeleton circle={true} height={152} width={152} />
                </div>
                <div className="notification-message flex-grow-1">
                    <h5 className="mt-0 fs-2"><Skeleton width={100} /></h5>
                    <p className="d-block font-ave-book w-100 fs-5" style={{ maxWidth: '820px' }}>
                        <Skeleton count={3} />
                    </p>
                </div>
                <div className="align-self-start notif-date-wrapper white-space-nowrap">
                    <Skeleton />
                </div>
            </div>
        </li>
    )
}

export default SkeletonNotification;