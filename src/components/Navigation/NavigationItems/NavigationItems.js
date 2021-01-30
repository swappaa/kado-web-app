import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Auxi/Auxi';

const navigationItems = (props) => (
    <ul className="d-flex align-items-center">

        {props.isAuthenticated ?
            <Aux>
                <NavigationItem link="/alert-list" classes="d-flex flex-column align-items-center text-decoration-none text-center alerts-wrapper position-relative">
                    <svg width="50pt" height="56pt" viewBox="0 0 50 56" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="#ee2a59ff">
                            <path opacity="1.00"
                                d=" M 8.96 12.95 C 12.25 5.77 20.89 1.98 28.47 4.00 C 23.73 12.90 30.78 24.01 40.66 24.24 C 40.46 29.61 42.35 34.97 46.53 38.48 C 49.41 40.70 47.36 45.63 43.84 45.49 C 30.90 45.65 17.94 45.55 5.00 45.53 C 2.81 45.74 1.25 44.13 0.00 42.58 L 0.00 40.72 C 1.88 37.77 4.96 35.68 6.20 32.31 C 8.88 26.14 5.87 19.01 8.96 12.95 Z" />
                            <path opacity="1.00"
                                d=" M 15.37 47.84 C 21.23 47.81 27.09 47.76 32.95 47.87 C 31.35 56.95 16.80 57.03 15.37 47.84 Z" />
                        </g>
                    </svg>
                    <span className="count-message text-white">2</span>
                    <span className="fs-5 d-block theme-pink-color nav-item">alerts</span>
                </NavigationItem>

                <NavigationItem link="/kados-list" classes="d-flex flex-column align-items-center text-decoration-none text-center">
                    <svg width="59pt" height="54pt" viewBox="0 0 59 54" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="#ee2a59ff">
                            <path opacity="1.00"
                                d=" M 0.00 8.66 C 1.18 4.66 4.51 0.92 8.94 0.91 C 15.10 0.86 21.27 0.81 27.42 0.95 C 27.60 4.23 27.48 7.52 27.53 10.80 C 20.67 5.01 11.04 13.74 16.10 21.14 C 10.74 21.26 5.37 21.15 0.00 21.18 L 0.00 8.66 Z" />
                            <path opacity="1.00"
                                d=" M 32.18 0.95 C 41.10 1.96 54.46 -3.05 59.00 7.64 L 59.00 21.19 C 53.76 21.16 48.53 21.23 43.29 21.17 C 48.95 13.92 38.80 4.89 32.04 10.88 C 32.14 7.57 32.05 4.26 32.18 0.95 Z" />
                            <path opacity="1.00"
                                d=" M 20.23 18.99 C 17.52 17.47 18.90 12.79 21.98 12.95 C 25.45 12.89 26.10 17.19 27.05 19.75 C 24.77 19.67 22.41 19.79 20.23 18.99 Z" />
                            <path opacity="1.00"
                                d=" M 33.06 19.72 C 32.46 15.88 37.12 10.09 40.45 14.55 C 42.60 19.22 36.31 20.19 33.06 19.72 Z" />
                            <path opacity="1.00"
                                d=" M 0.00 25.72 C 8.15 25.70 16.30 25.61 24.45 25.76 C 22.55 28.03 20.17 29.86 18.31 32.16 C 19.22 33.03 20.09 33.94 20.94 34.86 C 23.19 32.91 25.10 30.59 27.46 28.76 C 27.51 33.96 27.57 39.16 27.44 44.36 C 21.07 44.65 17.59 51.18 11.91 53.31 C 11.64 50.48 11.82 47.64 11.72 44.81 C 6.54 45.23 1.62 42.36 0.00 37.31 L 0.00 25.72 Z" />
                            <path opacity="1.00"
                                d=" M 35.19 25.75 C 43.13 25.59 51.06 25.74 59.00 25.68 L 59.00 37.44 C 55.03 48.71 41.10 43.47 32.19 44.60 C 32.03 39.26 32.14 33.92 32.14 28.58 C 34.36 30.45 36.30 32.63 38.35 34.68 C 39.12 33.45 40.36 32.79 41.66 32.23 C 39.50 30.08 37.17 28.09 35.19 25.75 Z" />
                        </g>
                    </svg>
                    <span className="fs-5 d-block theme-pink-color nav-item">kâdos</span>
                </NavigationItem>
                <NavigationItem link="/browse" classes="d-flex flex-column align-items-center text-decoration-none text-center">
                    <svg width="45pt" height="53pt" viewBox="0 0 45 53" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="#ee2a59ff">
                            <path opacity="1.00"
                                d=" M 0.73 20.63 C 7.99 13.89 15.35 7.26 22.66 0.58 C 29.90 7.14 37.11 13.73 44.32 20.33 C 44.91 22.77 44.39 25.39 44.56 27.89 C 37.30 21.22 29.98 14.63 22.74 7.94 C 15.32 14.49 8.12 21.27 0.76 27.87 C 0.75 25.46 0.75 23.04 0.73 20.63 Z" />
                            <path opacity="1.00"
                                d=" M 0.75 32.08 C 8.03 25.39 15.35 18.74 22.67 12.08 C 29.98 18.72 37.27 25.38 44.56 32.04 C 44.49 39.03 44.73 46.02 44.42 53.00 L 2.30 53.00 L 0.81 52.27 C 0.66 45.54 0.80 38.81 0.75 32.08 Z" />
                        </g>
                    </svg>
                    <span className="fs-5 d-block theme-pink-color nav-item">Browse</span>
                </NavigationItem>
                <NavigationItem link="/favorites" classes="d-flex flex-column align-items-center text-decoration-none text-center">
                    <svg width="56pt" height="49pt" viewBox="0 0 56 49" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="#ee2a59ff">
                            <path opacity="1.00"
                                d=" M 0.68 16.05 C 0.69 8.34 7.08 1.06 14.95 0.92 C 20.43 0.38 25.15 3.80 28.35 7.91 C 31.46 3.08 37.24 -0.00 43.03 1.06 C 50.32 1.97 55.75 8.93 55.78 16.12 C 56.09 22.38 52.38 27.89 48.12 32.11 C 42.13 38.00 35.54 43.20 29.07 48.54 L 28.75 49.00 L 27.36 49.00 C 22.84 44.08 17.10 40.36 12.23 35.76 C 6.47 30.71 0.28 24.30 0.68 16.05 Z" />
                        </g>
                    </svg>
                    <span className="fs-5 d-block theme-pink-color nav-item">Favorites</span>
                </NavigationItem>

                <NavigationItem link="/account" classes="d-flex flex-column align-items-center text-decoration-none text-center me-0">
                    <svg width="54pt" height="52pt" viewBox="0 0 54 52" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="#ee2a59ff">
                            <path opacity="1.00"
                                d=" M 21.42 0.00 L 32.22 0.00 C 32.33 1.46 32.42 2.92 32.53 4.38 C 34.49 5.07 36.42 5.86 38.31 6.72 C 39.47 5.74 40.64 4.79 41.84 3.88 C 44.30 6.41 46.89 8.81 49.34 11.35 C 48.35 12.45 47.36 13.53 46.38 14.63 C 47.28 16.50 48.08 18.40 48.81 20.34 C 50.29 20.45 51.77 20.54 53.25 20.64 C 53.25 24.16 53.26 27.68 53.24 31.20 C 51.75 31.30 50.27 31.40 48.79 31.51 C 48.08 33.44 47.28 35.34 46.39 37.19 C 47.37 38.31 48.36 39.43 49.35 40.54 C 46.81 43.03 44.27 45.52 41.75 48.02 C 40.59 47.02 39.42 46.05 38.23 45.09 C 36.38 46.02 34.47 46.80 32.52 47.48 C 32.42 48.94 32.32 50.40 32.22 51.86 C 28.73 51.89 25.23 51.81 21.74 52.00 L 21.52 52.00 C 21.38 50.48 21.25 48.97 21.11 47.45 C 19.15 46.76 17.22 46.00 15.34 45.10 C 14.21 46.07 13.07 47.04 11.95 48.02 C 9.41 45.56 6.93 43.04 4.34 40.64 C 5.31 39.49 6.28 38.33 7.27 37.19 C 6.39 35.32 5.58 33.41 4.84 31.48 C 3.36 31.39 1.87 31.30 0.39 31.22 C 0.36 27.69 0.37 24.17 0.38 20.65 C 1.88 20.55 3.38 20.45 4.88 20.34 C 5.59 18.41 6.39 16.51 7.28 14.66 C 6.30 13.54 5.31 12.43 4.32 11.32 C 6.85 8.81 9.38 6.30 11.97 3.84 C 13.08 4.81 14.21 5.77 15.33 6.74 C 17.28 5.87 19.24 5.04 21.23 4.26 C 21.29 2.84 21.36 1.42 21.42 0.00 M 24.13 16.13 C 20.77 17.00 17.93 19.67 16.93 23.01 C 15.02 28.59 19.16 34.99 24.90 35.89 C 30.89 37.24 37.28 32.20 37.19 26.03 C 37.45 19.47 30.36 14.19 24.13 16.13 Z" />
                        </g>
                    </svg>
                    <span className="fs-5 d-block theme-pink-color nav-item">Account</span>
                </NavigationItem>
            </Aux>
            : null}

        {!props.isAuthenticated
            ? <Aux>
                <li>
                    <button data-bs-toggle="modal" data-bs-target="#signapp-modal" className="btn d-flex align-items-center text-decoration-none theme-pink-bg-color text-white br-radius-40 font-ave-reg fs-3 sign-up-btn me-4 text-uppercase">
                        <span> Sign up</span>
                    </button>
                </li>
                <li>
                    <button data-bs-toggle="modal" data-bs-target="#signin-modal"
                        className="btn btn-sign bg-transparent d-flex align-items-center text-decoration-none text-uppercase font-ave-reg">
                        <span className="me-3 fs-5 nav-item">Sign in</span>
                        <svg width="59px" height="62px" viewBox="0 0 59 62" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="#414142ff">
                                <path fill="#414142" opacity="1.00" d=" M 25.62 0.00 L 30.81 0.00 C 45.52 1.16 58.00 13.84 59.00 28.55 L 59.00 33.35 C 58.07 48.04 45.67 60.70 31.01 62.00 L 25.73 62.00 C 14.71 61.11 4.52 54.01 0.00 43.91 L 0.00 41.66 C 1.29 40.75 3.00 39.28 4.59 40.49 C 7.09 43.32 8.48 47.02 11.47 49.43 C 18.60 56.11 29.81 57.82 38.61 53.56 C 48.75 48.97 54.79 37.08 52.46 26.17 C 50.74 17.19 43.71 9.46 34.86 7.05 C 24.77 4.01 12.87 8.39 7.46 17.49 C 6.59 18.91 5.66 20.28 4.57 21.55 C 2.96 22.70 1.30 21.26 0.00 20.36 L 0.00 18.07 C 4.55 8.04 14.64 0.94 25.62 0.00 Z" />
                                <path fill="#414142" opacity="1.00" d=" M 29.24 22.77 C 27.69 20.34 30.82 17.21 33.27 18.63 C 36.04 20.84 38.32 23.59 40.89 26.02 C 43.49 28.13 44.40 32.32 41.88 34.86 C 39.08 37.91 36.24 40.97 33.01 43.57 C 30.50 44.58 27.81 41.56 29.24 39.24 C 30.68 37.34 32.43 35.71 34.16 34.08 C 28.11 33.90 22.04 34.36 16.01 33.87 C 13.45 33.01 13.43 29.02 15.98 28.14 C 22.01 27.63 28.07 28.12 34.11 27.90 C 32.38 26.30 30.70 24.63 29.24 22.77 Z" />
                            </g>
                        </svg>
                    </button>
                </li>
            </Aux>
            : <li>
                <button data-bs-toggle="modal" data-bs-target="#signin-modal"
                    className="d-none btn btn-sign bg-transparent d-flex align-items-center text-decoration-none text-uppercase font-ave-reg">
                    <span className="me-3 fs-5 nav-item">Sign out</span>
                    <svg width="59px" height="62px" viewBox="0 0 59 62" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="#414142ff">
                            <path fill="#414142" opacity="1.00" d=" M 25.62 0.00 L 30.81 0.00 C 45.52 1.16 58.00 13.84 59.00 28.55 L 59.00 33.35 C 58.07 48.04 45.67 60.70 31.01 62.00 L 25.73 62.00 C 14.71 61.11 4.52 54.01 0.00 43.91 L 0.00 41.66 C 1.29 40.75 3.00 39.28 4.59 40.49 C 7.09 43.32 8.48 47.02 11.47 49.43 C 18.60 56.11 29.81 57.82 38.61 53.56 C 48.75 48.97 54.79 37.08 52.46 26.17 C 50.74 17.19 43.71 9.46 34.86 7.05 C 24.77 4.01 12.87 8.39 7.46 17.49 C 6.59 18.91 5.66 20.28 4.57 21.55 C 2.96 22.70 1.30 21.26 0.00 20.36 L 0.00 18.07 C 4.55 8.04 14.64 0.94 25.62 0.00 Z" />
                            <path fill="#414142" opacity="1.00" d=" M 29.24 22.77 C 27.69 20.34 30.82 17.21 33.27 18.63 C 36.04 20.84 38.32 23.59 40.89 26.02 C 43.49 28.13 44.40 32.32 41.88 34.86 C 39.08 37.91 36.24 40.97 33.01 43.57 C 30.50 44.58 27.81 41.56 29.24 39.24 C 30.68 37.34 32.43 35.71 34.16 34.08 C 28.11 33.90 22.04 34.36 16.01 33.87 C 13.45 33.01 13.43 29.02 15.98 28.14 C 22.01 27.63 28.07 28.12 34.11 27.90 C 32.38 26.30 30.70 24.63 29.24 22.77 Z" />
                        </g>
                    </svg>
                </button>
            </li>
        }




    </ul>
);

export default navigationItems;