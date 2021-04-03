import React from 'react';
import Skeleton from "react-loading-skeleton";

const favorites = () => {
    return (
        <div className="col-2 favorite-item-wrapper position-relative">
            <div className="border-0 text-center p-2 position-relative favorite-item" data-fav="x-fav">
                <div className="profileWrapper" style={{ borderRadius: '35px', overflow: 'hidden' }}>
                    <Skeleton height={240} width={220} />
                </div>
                <h5 className="mt-3 fs-4"> <Skeleton count={1} /></h5>
                <div className="py-1 pb-0">
                    <Skeleton count={1} />
                </div>
            </div>
        </div>
    )
}

export default favorites;