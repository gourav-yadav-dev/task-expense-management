import { useFilter } from "../../Context/FilterContext";
import { useState } from "react";
import "./TaskStyle.css";

export default function TaskFilter() {
    const { updateFilter, resetFilters } = useFilter();

    const [weekLabel, setWeekLabel] = useState("This Week");
    const [statusLabel, setStatusLabel] = useState("Status");
    const [searchText, setSearchText] = useState("");

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const applyRange = () => {
        setWeekLabel("Custom Range");

        updateFilter({
            week: "custom",
            range: {
                from: startDate,
                to: endDate,
            },
        });

        document.getElementById("closeRangeModalBtn").click();
    };

   
    const handleSearch = () => {
        if (searchText.trim() !== "") {
            updateFilter({ search: searchText.trim() });
        }
    };

   
    const handleReset = () => {
        setWeekLabel("This Week");
        setStatusLabel("Status");
        setSearchText("");
        setStartDate("");
        setEndDate("");

        resetFilters(); 
    };

    return (
        <>
            <div className="d-flex align-items-center gap-2 m-0 m-sm-3">

               
                <div className="dropdown">
                    <button
                        className="btn btn-outline-secondary rounded-3 px-4 py-2 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                    >
                        {weekLabel}
                    </button>

                    <ul className="dropdown-menu shadow-sm p-2" style={{ minWidth: "180px" }}>
                        <li>
                            <button
                                className="dropdown-item py-2"
                                onClick={() => {
                                    setWeekLabel("This Week");
                                    updateFilter({ week: "thisWeek", range: null });
                                }}
                            >
                                This Week
                            </button>
                        </li>

                        <li>
                            <button
                                className="dropdown-item py-2"
                                onClick={() => {
                                    setWeekLabel("This Month");
                                    updateFilter({ week: "thisMonth", range: null });
                                }}
                            >
                                This Month
                            </button>
                        </li>

                        <li>
                            <button
                                className="dropdown-item py-2"
                                data-bs-toggle="modal"
                                data-bs-target="#customRangeModal"
                                onClick={() => setWeekLabel("Custom Range")}
                            >
                                Custom Range
                            </button>
                        </li>
                    </ul>
                </div>

                
                <div className="dropdown">
                    <button
                        className="btn btn-outline-secondary rounded-3 px-4 py-2 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                    >
                        {statusLabel}
                    </button>

                    <ul className="dropdown-menu shadow-sm p-2" style={{ minWidth: "180px" }}>
                        <li>
                            <button
                                className="dropdown-item py-2"
                                onClick={() => {
                                    setStatusLabel("Completed");
                                    updateFilter({ status: "completed" });
                                }}
                            >
                                Completed
                            </button>
                        </li>

                        <li>
                            <button
                                className="dropdown-item py-2"
                                onClick={() => {
                                    setStatusLabel("Pending");
                                    updateFilter({ status: "pending" });
                                }}
                            >
                                Pending
                            </button>
                        </li>
                    </ul>
                </div>

                
                <div className="d-flex align-items-center position-relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control rounded-3 ps-5"
                        style={{ height: "42px" }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <span
                        className="position-absolute top-50 translate-middle-y ms-3 text-secondary"
                        style={{ fontSize: "18px" }}
                    >
                        🔍
                    </span>

                    <button
                        className="btn btn-primary ms-2"
                        style={{ height: "42px" }}
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

               
                <button
                    className="btn btn-outline-danger rounded-3 px-3 py-2"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>

            
            <div className="modal fade" id="customRangeModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-sm modal-fullscreen-sm-down">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Select Custom Range</h5>
                            <button
                                id="closeRangeModalBtn"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <label className="form-label">From</label>
                            <input
                                type="date"
                                className="form-control mb-3"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />

                            <label className="form-label">To</label>
                            <input
                                type="date"
                                className="form-control mb-3"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />

                            <button
                                className="btn btn-primary w-100"
                                disabled={!startDate || !endDate}
                                onClick={applyRange}
                            >
                                Apply Range
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
