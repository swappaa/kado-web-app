import React from 'react';
import Skeleton from "react-loading-skeleton";

const SkeletonKadosRequests = () => {
    return (
        <tr>
            <td width="200" >
                <div className="fs-2 text-center w-50 mx-auto sent-wrapper">
                    <Skeleton />
                    <span className="display-2 day-sent">  <Skeleton /></span>
                    <Skeleton />
                </div>
            </td>
            <td width="250">
                <Skeleton circle={true} width={100} height={100} />
            </td>
            <td width="250">
                <Skeleton circle={true} width={100} height={100} />
            </td>
            <td width="300">
                <span className="display-6 text-uppercase status-wrapper">
                    <Skeleton />
                </span>
            </td>
            <td>

            </td>
        </tr>
    )
}

export default SkeletonKadosRequests;