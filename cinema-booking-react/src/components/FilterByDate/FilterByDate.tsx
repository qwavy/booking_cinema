import React from 'react';

const FilterByDate = ():JSX.Element => {

    const active_dates = [
        "2024-11-04",
        "2024-11-05",
        "2024-11-06",
        "2024-11-07",
    ]
    const active_months = active_dates.map((active_date) => {
        return new Date(active_date).toLocaleString("en-GB",{ month: "long" })
    })
    const usedMonth = new Set()

    return (
        <div>
            {active_months.map((active_month) => (
                <div> {usedMonth.has(active_month) ? "" : <h2>{active_month}</h2>}
                    {active_month}
                </div>
            ))}
        </div>
    );
};

export default FilterByDate;