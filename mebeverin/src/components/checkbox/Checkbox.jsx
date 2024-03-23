import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="checkbox-container" onClick={handleCheckboxChange}>
            <div className={checked ? "checkbox checked" : "checkbox"}></div>
        </div>
    );
};

export default Checkbox;
