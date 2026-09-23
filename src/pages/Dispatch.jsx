import {
  Briefcase,
  Users,
  Send,
  Truck,
  CheckCircle,
  CalendarDays,
  Clock,
  MapPin,
  Navigation,
} from "lucide-react";

import "../styles/Dispatch.css";

function Dispatch() {
  const jobs = [
    {
      id: "#J1024",
      time: "09:00 AM",
      customer: "ABC Company",
      problem: "Network Issue",
      location: "Kolkata",
      technician: "Rahul",
      initial: "R",
      status: "En Route",
    },
    {
      id: "#J1023",
      time: "11:30 AM",
      customer: "XYZ Company",
      problem: "Router Replacement",
      location: "Howrah",
      technician: "Priya",
      initial: "P",
      status: "Assigned",
    },
    {
      id: "#J1022",
      time: "02:00 PM",
      customer: "Global Tech",
      problem: "Internet Installation",
      location: "Kolkata",
      technician: "Amit",
      initial: "A",
      status: "On Site",
    },
    {
      id: "#J1021",
      time: "03:30 PM",
      customer: "Nova Systems",
      problem: "CCTV Maintenance",
      location: "Salt Lake",
      technician: "Suman",
      initial: "S",
      status: "Completed",
    },
    {
      id: "#J1020",
      time: "05:00 PM",
      customer: "TechZone Ltd",
      problem: "Network Connection",
      location: "New Town",
      technician: "Riya",
      initial: "R",
      status: "Assigned",
    },
  ];

  return (
    <div className="dispatch-page">

      {/* HEADER */}

      <div className="dispatch-header">

        <div>
          <p className="dispatch-breadcrumb">
            Field Operations / Dispatch
          </p>

          <h1 className="dispatch-title">
            <Truck size={34} />
            Dispatch
          </h1>

          <p className="dispatch-subtitle">
            Assign and monitor field jobs in real time.
          </p>
        </div>

        <button className="dispatch-date">
          <CalendarDays size={18} />
          September 23, 2026
        </button>

      </div>


      {/* SUMMARY CARDS */}

      <div className="dispatch-stats">

        <div className="dispatch-stat-card">
          <div className="dispatch-stat-icon blue">
            <Briefcase size={23} />
          </div>

          <div>
            <span>Total Jobs</span>
            <strong>32</strong>
          </div>
        </div>


        <div className="dispatch-stat-card">
          <div className="dispatch-stat-icon green">
            <Users size={23} />
          </div>

          <div>
            <span>Assigned</span>
            <strong>24</strong>
          </div>
        </div>


        <div className="dispatch-stat-card">
          <div className="dispatch-stat-icon orange">
            <Send size={23} />
          </div>

          <div>
            <span>En Route</span>
            <strong>5</strong>
          </div>
        </div>


        <div className="dispatch-stat-card">
          <div className="dispatch-stat-icon purple">
            <Truck size={23} />
          </div>

          <div>
            <span>On Site</span>
            <strong>3</strong>
          </div>
        </div>


        {/* COMPLETED */}

        <div className="dispatch-stat-card">
          <div className="dispatch-stat-icon completed">
            <CheckCircle size={23} />
          </div>

          <div>
            <span>Completed</span>
            <strong>18</strong>
          </div>
        </div>

      </div>


      {/* DISPATCH CARD */}

      <div className="dispatch-card">

        {/* CARD HEADER */}

        <div className="dispatch-card-header">

          <div>
            <h2>Today's Dispatch</h2>

            <p>
              Monitor technician assignments and job status
            </p>
          </div>


          {/* FILTERS */}

          <div className="dispatch-filters">

            <button className="dispatch-filter active">
              All Jobs
            </button>

            <button className="dispatch-filter">
              Assigned
            </button>

            <button className="dispatch-filter">
              En Route
            </button>

            <button className="dispatch-filter">
              On Site
            </button>

            <button className="dispatch-filter">
              Completed
            </button>

          </div>

        </div>


        {/* JOB LIST */}

        <div className="dispatch-job-list">

          {jobs.map((job) => (

            <div
              className="dispatch-job"
              key={job.id}
            >

              {/* TIME */}

              <div className="dispatch-time">

                <Clock size={19} />

                <span>
                  {job.time}
                </span>

              </div>


              {/* JOB DETAILS */}

              <div className="dispatch-job-details">

                <div className="dispatch-job-id">

                  <span>
                    {job.id}
                  </span>

                  <span
                    className={`dispatch-status ${job.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {job.status}
                  </span>

                </div>


                <h3>
                  {job.customer}
                </h3>


                <p className="dispatch-problem">
                  {job.problem}
                </p>


                <div className="dispatch-location">
                  <MapPin size={15} />
                  {job.location}
                </div>

              </div>


              {/* TECHNICIAN */}

              <div className="dispatch-technician">

                <div className="dispatch-avatar">
                  {job.initial}
                </div>

                <div className="technician-name">

                  <span>
                    Technician
                  </span>

                  <strong>
                    {job.technician}
                  </strong>

                </div>

              </div>


              {/* TRACK BUTTON */}

              <button className="track-button">

                <Navigation size={16} />

                Track

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dispatch;