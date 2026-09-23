import {
  Briefcase,
  LayoutDashboard,
  ClipboardList,
  Users,
  LogIn,
  MapPin,
  CalendarDays,
  Clock,
  Plus,
  MoreHorizontal,
} from "lucide-react";

import "../styles/Jobs.css";

function Jobs({
  onGoToDashboard,
  onGoToLogin,
  onGoToRequests,
  onGoToTechnicians,
}) {
  const jobs = [
    {
      id: "#J1024",
      customer: "ABC Company",
      service: "Internet Repair",
      technician: "Rahul",
      location: "Kolkata",
      date: "Sep 23, 2026",
      time: "09:00 AM",
      status: "In Progress",
    },
    {
      id: "#J1023",
      customer: "XYZ Company",
      service: "Router Installation",
      technician: "Priya",
      location: "Howrah",
      date: "Sep 23, 2026",
      time: "11:30 AM",
      status: "Scheduled",
    },
    {
      id: "#J1022",
      customer: "Global Tech",
      service: "Internet Installation",
      technician: "Amit",
      location: "Kolkata",
      date: "Sep 23, 2026",
      time: "02:00 PM",
      status: "Scheduled",
    },
    {
      id: "#J1021",
      customer: "Nova Systems",
      service: "CCTV Maintenance",
      technician: "Suman",
      location: "Salt Lake",
      date: "Sep 22, 2026",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      id: "#J1020",
      customer: "TechZone Ltd",
      service: "Network Maintenance",
      technician: "Rahul",
      location: "New Town",
      date: "Sep 22, 2026",
      time: "03:30 PM",
      status: "Completed",
    },
    {
      id: "#J1019",
      customer: "Smart Office",
      service: "Router Replacement",
      technician: "Riya",
      location: "Kolkata",
      date: "Sep 21, 2026",
      time: "12:00 PM",
      status: "Cancelled",
    },
  ];

  return (
    <div className="jobs-page">

      {/* TOP BAR */}
      <header className="jobs-topbar">

        <div className="jobs-brand">
          <div className="jobs-logo">
            F
          </div>

          <div>
            <h2>
              Field<span>Sync</span>
            </h2>

            <small>
              FIELD SERVICE MANAGEMENT
            </small>
          </div>
        </div>

        <button
          className="jobs-login-button"
          onClick={onGoToLogin}
        >
          <LogIn size={17} />
          Login
        </button>

      </header>


      {/* MAIN CONTENT */}
      <main className="jobs-content">

        {/* BREADCRUMB */}
        <p className="jobs-breadcrumb">
          Field Operations / Jobs
        </p>


        {/* PAGE HEADER */}
        <div className="jobs-header">

          <div>
            <h1>
              <Briefcase size={31} />
              Jobs
            </h1>

            <p>
              Schedule, assign and track field service jobs.
            </p>
          </div>

          <button className="new-job-button">
            <Plus size={18} />
            New Job
          </button>

        </div>


        {/* SUMMARY */}
        <div className="jobs-stats">

          <div className="job-stat-card">
            <div className="job-stat-icon green">
              <Briefcase size={21} />
            </div>

            <div>
              <span>Total Jobs</span>
              <strong>32</strong>
            </div>
          </div>


          <div className="job-stat-card">
            <div className="job-stat-icon blue">
              <CalendarDays size={21} />
            </div>

            <div>
              <span>Scheduled</span>
              <strong>12</strong>
            </div>
          </div>


          <div className="job-stat-card">
            <div className="job-stat-icon orange">
              <Clock size={21} />
            </div>

            <div>
              <span>In Progress</span>
              <strong>8</strong>
            </div>
          </div>


          <div className="job-stat-card">
            <div className="job-stat-icon purple">
              <Briefcase size={21} />
            </div>

            <div>
              <span>Completed</span>
              <strong>12</strong>
            </div>
          </div>

        </div>


        {/* JOB TABLE CARD */}
        <div className="jobs-card">

          {/* TOOLBAR */}
          <div className="jobs-toolbar">

            <div className="jobs-search">
              <Briefcase size={18} />

              <input
                type="text"
                placeholder="Search jobs..."
              />
            </div>


            <div className="jobs-filters">

              <button>
                Status
              </button>

              <button>
                Technician
              </button>

              <button>
                Date
              </button>

            </div>

          </div>


          {/* DESKTOP TABLE */}
          <div className="jobs-table-wrapper">

            <table className="jobs-table">

              <thead>
                <tr>
                  <th>Job</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Technician</th>
                  <th>Location</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {jobs.map((job) => (

                  <tr key={job.id}>

                    <td>
                      <strong className="job-id">
                        {job.id}
                      </strong>
                    </td>


                    <td>
                      <strong>
                        {job.customer}
                      </strong>
                    </td>


                    <td>
                      <div className="job-service">
                        {job.service}
                      </div>
                    </td>


                    <td>
                      <div className="job-technician">
                        <div className="job-avatar">
                          {job.technician.charAt(0)}
                        </div>

                        {job.technician}
                      </div>
                    </td>


                    <td>
                      <div className="job-location">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                    </td>


                    <td>
                      <div className="job-date">

                        <div>
                          <CalendarDays size={14} />
                          {job.date}
                        </div>

                        <div>
                          <Clock size={14} />
                          {job.time}
                        </div>

                      </div>
                    </td>


                    <td>
                      <span
                        className={`job-status ${job.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {job.status}
                      </span>
                    </td>


                    <td>
                      <button className="job-more">
                        <MoreHorizontal size={19} />
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* MOBILE CARDS */}
          <div className="mobile-jobs-list">

            {jobs.map((job) => (

              <div
                className="mobile-job-card"
                key={job.id}
              >

                <div className="mobile-job-top">

                  <strong>
                    {job.id}
                  </strong>

                  <span
                    className={`job-status ${job.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {job.status}
                  </span>

                </div>


                <h3>
                  {job.customer}
                </h3>

                <p>
                  {job.service}
                </p>


                <div className="mobile-job-info">

                  <span>
                    <Users size={14} />
                    {job.technician}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {job.location}
                  </span>

                  <span>
                    <CalendarDays size={14} />
                    {job.date}
                  </span>

                </div>


                <div className="mobile-job-bottom">

                  <span>
                    <Clock size={14} />
                    {job.time}
                  </span>

                  <button>
                    <MoreHorizontal size={18} />
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* FOOTER */}
          <div className="jobs-footer">

            <span>
              Showing 1–6 of 32 jobs
            </span>

            <div className="jobs-pagination">

              <button disabled>
                Previous
              </button>

              <button className="active">
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


        {/* NAVIGATION */}
        <div className="jobs-navigation">

          <button onClick={onGoToDashboard}>
            <LayoutDashboard size={17} />
            Dashboard
          </button>

          <button onClick={onGoToRequests}>
            <ClipboardList size={17} />
            Service Requests
          </button>

          <button onClick={onGoToTechnicians}>
            <Users size={17} />
            Technicians
          </button>

        </div>

      </main>

    </div>
  );
}

export default Jobs;