import React, { Component } from 'react';

import '../../App.css';
import './Payment.css';



class Payment extends Component {

    componentDidMount() {
        localStorage.setItem('path', window.location.pathname);
    }

    render() {
        return (
            <div className="payments">
                <section className="py-5">
                    <div className="container-fluid px-5">
                        <div className="customs-wrapper w-100 mx-auto">
                            <div className="payments-wrapper py-5">
                                <h2 className="text-uppercase theme-pink-color display-4 mb-5">Enter Payment info to continue</h2>
                                <form className="row g-3 gy-5 w-50   mw-100">
                                    <div className="col-12 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">Name on the Card</label>
                                    </div>
                                    <div className="col-12 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">Billing Address</label>
                                    </div>
                                    <div className="col-6 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">City</label>
                                    </div>
                                    <div className="col-3 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">State</label>
                                    </div>
                                    <div className="col-3 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">Zip</label>
                                    </div>
                                    <div className="col-12 form-floating">
                                        <input type="number" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">Card Number</label>
                                    </div>
                                    <div className="col-8 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">Expires</label>
                                    </div>
                                    <div className="col-4 form-floating">
                                        <input type="text" className="form-control form-control-lg border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded-0 fs-4" placeholder="Name on the Card" />
                                        <label for="floatingInput">CCV</label>
                                    </div>
                                    <div className="col-12 text-end">
                                        <p className="font-ave-heavy pe-5 fs-5 text-dark">Total to be charged: <small className="theme-pink-color">$199.00</small></p>
                                        <button className="btn font-ave-heavy fs-3 text-uppercase theme-pink-bg-color text-white px-5 py-2 w-50 mw-100 btn-hvr" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Payment;