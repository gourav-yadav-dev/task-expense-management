import { useFilter } from "../../Context/FilterContext";
import { useState } from "react";

export default function TaskFilter() {
    const { setFilter } = useFilter();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const applyDateRange = () => {
        if (startDate && endDate) {
            setFilter({
                type: "range",
                from: startDate,
                to: endDate,
            });
        }
    };

    return (
        <div> 
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Filter
                </button>

                <ul className="dropdown-menu dropdown-menu-end p-3 ms-5 shadow-sm" style={{ minWidth: "260px" }}>

                    {/* Quick Filters */}
                    <li className="mb-2">
                        <span className="fw-semibold text-secondary small">Quick Filters</span>
                    </li>

                    <li>
                        <button className="dropdown-item py-2 px-2 rounded-2" onClick={() => setFilter("today")}>
                            Today
                        </button>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    {/* Date Range */}
                    <li className="mb-2">
                        <span className="fw-semibold text-secondary small">Select Date Range</span>
                    </li>

                    <li className="mb-3">
                        <label className="form-label small mb-1">From</label>
                        <input
                            type="date"
                            className="form-control form-control-sm"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </li>

                    <li className="mb-3">
                        <label className="form-label small mb-1">To</label>
                        <input
                            type="date"
                            className="form-control form-control-sm"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </li>

                    <li className="mb-3">
                        <button
                            className="btn btn-primary btn-sm w-100"
                            onClick={applyDateRange}
                            disabled={!startDate || !endDate}
                        >
                            Apply Range
                        </button>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    {/* Status */}
                    <li className="mb-2">
                        <span className="fw-semibold text-secondary small">Status</span>
                    </li>

                    <li>
                        <button className="dropdown-item py-2 px-2 rounded-2" onClick={() => setFilter("month")}>
                            This Month
                        </button>
                    </li>

                    <li>
                        <button className="dropdown-item py-2 px-2 rounded-2" onClick={() => setFilter("completed")}>
                            Completed
                        </button>
                    </li>

                    <li>
                        <button className="dropdown-item py-2 px-2 rounded-2" onClick={() => setFilter("pending")}>
                            Pending
                        </button>
                    </li>

                </ul>


            </div>
        </div>
    );
}
