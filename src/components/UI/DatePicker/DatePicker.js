import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerUI = () => {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            closeOnScroll={true}
            selected={startDate}
            onChange={date => setStartDate(date)}
            isClearable
            shouldCloseOnSelect={false}
            maxDate={new Date()}
            placeholderText="Birthday (optional)"
            className="form-control form-control-lg border-0 rounded-0 fs-4"
            name="date_picker"
        />
    );
};

export default DatePickerUI;