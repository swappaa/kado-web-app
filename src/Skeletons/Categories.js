import React from 'react';
import Skeleton from "react-loading-skeleton";

const categories = () => {
    return (
        <div className="row featured-wrapper-column my-3">
            <div className="col-12">
                <div className="element-header py-4">
                    <h2 className="text-uppercase theme-pink-color display-6"><Skeleton width={290} count={1} /></h2>
                </div>
            </div>
            <div className="row">
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
                <div className="element-featured-wrapper py-3 position-relative" >
                    <div className="featured-wrapper text-center position-relative" data-fav='x-fav'>
                        <div className="image-wrappers">
                            <Skeleton height={245} />
                        </div>
                        <div className="featured-talent my-2">
                            <h5 className="fs-4 font-ave-roman"><Skeleton count={1} /></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default categories;