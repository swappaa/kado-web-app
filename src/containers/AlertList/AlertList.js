import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import withAuthorization from '../../hoc/withAuthorization/withAuthorization';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import SkeletonNotification from '../../Skeletons/SkeletonNotification';

import * as actions from '../../store/actions/index';
import Notification from '../../components/Talent/Notification';
import '../../App.css';
import './AlertList.css';


TimeAgo.addLocale(en)


const AlertList = props => {

    const dispatch = useDispatch();

    const notif = useSelector(state => {
        return state.notifications.notifications;
    });

    const error = useSelector(state => state.notifications.error);
    const loading = useSelector(state => state.notifications.loading);
    const token = useSelector(state => state.auth.token);
    const username = useSelector(state => state.auth.username);

    const onFetchNotifications = useCallback(
        () => dispatch(actions.fetchNotification(token, username)),
        [dispatch]
    );

    useEffect(() => {
        window.scroll({
            top: 0
        });
        // localStorage.setItem('path', window.location.pathname);
        onFetchNotifications(token, username);
    }, [onFetchNotifications]);

    let notificationList = [1, 2, 3].map((n) => <SkeletonNotification key={n} />);
    if (!loading) {
        notificationList = (
            <Notification notification={notif} />
        );
    }

    return (
        <div className="alerts-list">
            <section className="pb-5">
                <div className="container-fluid px-5">
                    <div className="customs-wrapper w-100 mx-auto">
                        <h2 className="text-uppercase theme-pink-color display-5 mx-3 mb-3">Alerts</h2>
                        <ul className="d-flex flex-column">
                            {notificationList}
                        </ul>
                    </div>
                </div>
            </section>
        </div >
    )
}
export default withAuthorization(AlertList);
