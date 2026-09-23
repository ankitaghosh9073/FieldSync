import {
  Users,
  LayoutDashboard,
  ClipboardList,
  LogIn,
  MapPin,
  Phone,
  Briefcase,
  Plus,
} from "lucide-react";

import "../styles/Technicians.css";

function Technicians({
  onGoToDashboard,
  onGoToLogin,
  onGoToRequests,
}) {
  const technicians = [
    {
      name: "Rahul",
      role: "Network Technician",
      location: "Kolkata",
      phone: "+91 98765 43210",
      jobs: 8,
      status: "Available",
      initial: "R",
    },
    {
      name: "Priya",
      role: "Installation Technician",
      location: "Howrah",
      phone: "+91 98765 12345",
      jobs: 6,
      status: "Busy",
      initial: "P",
    },
    {
      name: "Amit",
      role: "CCTV Technician",
      location: "Salt Lake",
      phone: "+91 98765 67890",
      jobs: 5,
      status: "Available",
      initial: "A",
    },
    {
      name: "Suman",
      role: "Field Support Technician",
      location: "New Town",
      phone: "+91 98765 55555",
      jobs: 7,
      status: "Available",
      initial: "S",
    },
    {
      name: "Ankit",
      role: "Network Technician",
      location: "Kolkata",
      phone: "+91 98765 11111",
      jobs: 4,
      status: "Busy",
      initial: "A",
    },
    {
      name: "Riya",
      role: "Maintenance Technician",
      location: "Howrah",
      phone: "+91 98765 22222",
      jobs: 3,
      status: "Available",
      initial: "R",
    },
  ];

  return (
    <div className="technicians-page">

      {/* HEADER */}
      <header className="technicians-topbar">

        <div className="technician-brand">
          <div className="technician-logo">
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
          className="technician-login-btn"
          onClick={onGoToLogin}
        >
          <LogIn size={17} />
          Login
        </button>

      </header>


      {/* CONTENT */}
      <main className="technicians-content">

        {/* BREADCRUMB */}
        <p className="technician-breadcrumb">
          Field Operations / Team / Technicians
        </p>


        {/* TITLE + ADD BUTTON */}
        <div className="technicians-title">

          <div>
            <h1>
              <Users size={31} />
              Technicians
            </h1>

            <p>
              Manage your field technicians and their
              current availability.
            </p>
          </div>

          {/* ADD TECHNICIAN */}
          <button className="add-technician-button">
            <Plus size={18} />
            Add Technician
          </button>

        </div>


        {/* STATS */}
        <div className="technician-stats">

          <div className="technician-stat">
            <div className="stat-icon green">
              <Users size={21} />
            </div>

            <div>
              <span>Total Technicians</span>
              <strong>18</strong>
            </div>
          </div>


          <div className="technician-stat">
            <div className="stat-icon blue">
              <Briefcase size={21} />
            </div>

            <div>
              <span>Active Jobs</span>
              <strong>32</strong>
            </div>
          </div>


          <div className="technician-stat">
            <div className="stat-icon purple">
              <Users size={21} />
            </div>

            <div>
              <span>Available</span>
              <strong>14</strong>
            </div>
          </div>


          <div className="technician-stat">
            <div className="stat-icon orange">
              <Briefcase size={21} />
            </div>

            <div>
              <span>Busy</span>
              <strong>4</strong>
            </div>
          </div>

        </div>


        {/* TECHNICIAN CARDS */}
        <div className="technician-grid">

          {technicians.map((technician) => (

            <div
              className="technician-card"
              key={technician.name}
            >

              <div className="technician-card-top">

                <div className="technician-avatar">
                  {technician.initial}
                </div>

                <span
                  className={`technician-status ${
                    technician.status === "Available"
                      ? "available"
                      : "busy"
                  }`}
                >
                  {technician.status}
                </span>

              </div>


              <h3>
                {technician.name}
              </h3>

              <p className="technician-role">
                {technician.role}
              </p>


              <div className="technician-info">

                <div>
                  <MapPin size={16} />
                  <span>
                    {technician.location}
                  </span>
                </div>

                <div>
                  <Phone size={16} />
                  <span>
                    {technician.phone}
                  </span>
                </div>

                <div>
                  <Briefcase size={16} />
                  <span>
                    {technician.jobs} active jobs
                  </span>
                </div>

              </div>


              <button className="view-technician">
                View Profile
              </button>

            </div>

          ))}

        </div>


        {/* NAVIGATION */}
        <div className="technician-navigation">

          <button onClick={onGoToDashboard}>
            <LayoutDashboard size={17} />
            Dashboard
          </button>

          <button onClick={onGoToRequests}>
            <ClipboardList size={17} />
            Service Requests
          </button>

        </div>

      </main>

    </div>
  );
}

export default Technicians;