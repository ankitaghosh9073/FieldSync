import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  MapPin,
  CalendarDays,
  User,
} from "lucide-react";

import "../styles/ServiceRequests.css";

function ServiceRequests() {
  const requests = [
    {
      id: "#4821",
      customer: "ABC Company",
      problem: "Internet not working",
      location: "Kolkata",
      priority: "High",
      status: "In Progress",
      technician: "Rahul",
      date: "Sep 23, 2026",
    },
    {
      id: "#4820",
      customer: "XYZ Company",
      problem: "Router replacement",
      location: "Howrah",
      priority: "Medium",
      status: "New",
      technician: "Unassigned",
      date: "Sep 23, 2026",
    },
    {
      id: "#4819",
      customer: "Global Tech",
      problem: "Internet installation",
      location: "Kolkata",
      priority: "Low",
      status: "Completed",
      technician: "Priya",
      date: "Sep 22, 2026",
    },
    {
      id: "#4818",
      customer: "Nova Systems",
      problem: "CCTV maintenance",
      location: "Salt Lake",
      priority: "High",
      status: "In Progress",
      technician: "Amit",
      date: "Sep 22, 2026",
    },
    {
      id: "#4817",
      customer: "TechZone Ltd",
      problem: "Network connection issue",
      location: "New Town",
      priority: "Medium",
      status: "Completed",
      technician: "Rahul",
      date: "Sep 21, 2026",
    },
  ];

  return (
    <div className="requests-page">

      {/* HEADER */}

      <div className="requests-header">

        <div>
          <p className="requests-breadcrumb">
            Field Operations / Requests
          </p>

          <h1>
            Service Requests
          </h1>

          <p className="requests-subtitle">
            Manage and track customer service requests.
          </p>
        </div>

        <button className="new-request-button">
          <Plus size={18} />
          New Request
        </button>

      </div>


      {/* SUMMARY CARDS */}

      <div className="request-summary">

        <div className="request-summary-card">
          <span>Total Requests</span>
          <strong>248</strong>
          <small>All service requests</small>
        </div>

        <div className="request-summary-card">
          <span>New</span>
          <strong>12</strong>
          <small>Waiting for assignment</small>
        </div>

        <div className="request-summary-card">
          <span>In Progress</span>
          <strong>18</strong>
          <small>Currently being handled</small>
        </div>

        <div className="request-summary-card">
          <span>Completed</span>
          <strong>218</strong>
          <small>Successfully resolved</small>
        </div>

      </div>


      {/* REQUEST TABLE CARD */}

      <div className="requests-card">

        {/* TOOLBAR */}

        <div className="requests-toolbar">

          <div className="request-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search requests..."
            />

          </div>


          <div className="request-filters">

            <button className="filter-button">
              <Filter size={16} />
              Status
            </button>

            <button className="filter-button">
              Priority
            </button>

            <button className="filter-button">
              All Requests
            </button>

          </div>

        </div>


        {/* DESKTOP TABLE */}

        <div className="requests-table-wrapper">

          <table className="requests-table">

            <thead>

              <tr>
                <th>Request</th>
                <th>Customer</th>
                <th>Problem</th>
                <th>Priority</th>
                <th>Technician</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>

            </thead>


            <tbody>

              {requests.map((request) => (

                <tr key={request.id}>

                  {/* REQUEST */}

                  <td>

                    <div className="request-id">
                      {request.id}
                    </div>

                  </td>


                  {/* CUSTOMER */}

                  <td>

                    <div className="customer-cell">

                      <div className="customer-avatar">
                        {request.customer.charAt(0)}
                      </div>

                      <strong>
                        {request.customer}
                      </strong>

                    </div>

                  </td>


                  {/* PROBLEM */}

                  <td>

                    <div className="problem-cell">

                      <strong>
                        {request.problem}
                      </strong>

                      <span>
                        <MapPin size={13} />
                        {request.location}
                      </span>

                    </div>

                  </td>


                  {/* PRIORITY */}

                  <td>

                    <span
                      className={`priority-badge ${request.priority.toLowerCase()}`}
                    >
                      {request.priority}
                    </span>

                  </td>


                  {/* TECHNICIAN */}

                  <td>

                    <div className="technician-cell">

                      <User size={15} />

                      <span>
                        {request.technician}
                      </span>

                    </div>

                  </td>


                  {/* STATUS */}

                  <td>

                    <span
                      className={`status-badge ${request.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {request.status}
                    </span>

                  </td>


                  {/* DATE */}

                  <td>

                    <div className="date-cell">

                      <CalendarDays size={14} />

                      {request.date}

                    </div>

                  </td>


                  {/* MENU */}

                  <td>

                    <button className="request-more">

                      <MoreHorizontal size={19} />

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* MOBILE CARDS */}

        <div className="mobile-request-list">

          {requests.map((request) => (

            <div
              className="mobile-request-card"
              key={request.id}
            >

              <div className="mobile-request-top">

                <strong>
                  {request.id}
                </strong>

                <span
                  className={`status-badge ${request.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {request.status}
                </span>

              </div>


              <h3>
                {request.customer}
              </h3>

              <p>
                {request.problem}
              </p>


              <div className="mobile-request-info">

                <span>
                  <MapPin size={14} />
                  {request.location}
                </span>

                <span>
                  <User size={14} />
                  {request.technician}
                </span>

              </div>


              <div className="mobile-request-bottom">

                <span
                  className={`priority-badge ${request.priority.toLowerCase()}`}
                >
                  {request.priority}
                </span>

                <span>
                  {request.date}
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* FOOTER */}

        <div className="requests-footer">

          <span>
            Showing 1–5 of 248 requests
          </span>

          <div className="pagination">

            <button disabled>
              Previous
            </button>

            <button className="active-page">
              1
            </button>

            <button>
              2
            </button>

            <button>
              3
            </button>

            <button>
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ServiceRequests;