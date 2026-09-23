import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Briefcase,
  Truck,
  BarChart3,
  Settings,
  Search,
  Bell,
  CalendarDays,
  MapPin,
  Wrench,
  CheckCircle,
} from "lucide-react";

import "../styles/Dashboard.css";

function Dashboard({
  onGoToLogin,
  onGoToRequests,
  onGoToTechnicians,
  onGoToJobs,
  onGoToDispatch,
}) {
  return (
    <div className="dashboard-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        {/* LOGO */}
        <div className="dashboard-logo">

          <div className="logo-box">
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


        {/* MENU TITLE */}
        <div className="sidebar-section-title">
          MAIN MENU
        </div>


        {/* MENU */}
        <nav className="sidebar-menu">

          {/* DASHBOARD */}
          <button className="sidebar-item active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>


          {/* SERVICE REQUESTS */}
          <button
            className="sidebar-item"
            onClick={onGoToRequests}
          >
            <ClipboardList size={20} />
            <span>Service Requests</span>
            <span className="menu-count">24</span>
          </button>


          {/* TECHNICIANS */}
          <button
            className="sidebar-item"
            onClick={onGoToTechnicians}
          >
            <Users size={20} />
            <span>Technicians</span>
          </button>


          {/* JOBS */}
          <button
            className="sidebar-item"
            onClick={onGoToJobs}
          >
            <Briefcase size={20} />
            <span>Jobs</span>
          </button>


          {/* DISPATCH */}
          <button
            className="sidebar-item"
            onClick={onGoToDispatch}
          >
            <Truck size={20} />
            <span>Dispatch</span>
          </button>


          {/* ANALYTICS */}
          <button className="sidebar-item">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </button>

        </nav>


        {/* BOTTOM MENU */}
        <div className="sidebar-bottom">

          {/* SETTINGS */}
          <button className="sidebar-item">
            <Settings size={20} />
            <span>Settings</span>
          </button>


          {/* LOGIN */}
          <button
            className="sidebar-item login-menu"
            onClick={onGoToLogin}
          >
            <Users size={20} />
            <span>Login</span>
          </button>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}

      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-topbar">

          <div className="dashboard-search">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search requests, jobs..."
            />

          </div>


          <div className="topbar-right">

            <button className="notification-button">
              <Bell size={21} />
              <span></span>
            </button>


            <div className="user-profile">

              <div className="user-avatar">
                R
              </div>

              <div>
                <strong>Rahul Sharma</strong>
                <small>Admin</small>
              </div>

              <span className="profile-arrow">
                ⌄
              </span>

            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <div className="dashboard-content">

          {/* PAGE HEADER */}
          <div className="dashboard-heading">

            <div>

              <p>
                Good morning, Rahul 👋
              </p>

              <h1>
                Dashboard
              </h1>

              <span>
                Here's what's happening with your field
                operations today.
              </span>

            </div>


            <button className="new-request-btn">
              + New Request
            </button>

          </div>


          {/* ================= SUMMARY CARDS ================= */}

          <div className="dashboard-cards">

            {/* TOTAL REQUESTS */}
            <div className="dashboard-card">

              <div className="card-top">

                <div className="card-icon green">
                  <ClipboardList size={21} />
                </div>

                <span className="growth">
                  +12.5%
                </span>

              </div>

              <p>Total Requests</p>

              <h2>248</h2>

              <small>
                Compared to last month
              </small>

            </div>


            {/* ACTIVE JOBS */}
            <div className="dashboard-card">

              <div className="card-top">

                <div className="card-icon blue">
                  <Wrench size={21} />
                </div>

                <span className="growth">
                  +4.2%
                </span>

              </div>

              <p>Active Jobs</p>

              <h2>32</h2>

              <small>
                8 scheduled today
              </small>

            </div>


            {/* TECHNICIANS */}
            <div className="dashboard-card">

              <div className="card-top">

                <div className="card-icon purple">
                  <Users size={21} />
                </div>

                <span className="growth">
                  +3
                </span>

              </div>

              <p>Technicians</p>

              <h2>18</h2>

              <small>
                14 currently available
              </small>

            </div>


            {/* COMPLETED */}
            <div className="dashboard-card">

              <div className="card-top">

                <div className="card-icon orange">
                  <CheckCircle size={21} />
                </div>

                <span className="growth">
                  +8.4%
                </span>

              </div>

              <p>Completed</p>

              <h2>216</h2>

              <small>
                92% completion rate
              </small>

            </div>

          </div>


          {/* ================= LOWER SECTION ================= */}

          <div className="dashboard-grid">

            {/* TODAY'S JOBS */}
            <div className="jobs-panel">

              <div className="panel-header">

                <div>

                  <h2>
                    Today's Jobs
                  </h2>

                  <span>
                    Your scheduled field activities
                  </span>

                </div>

                <button onClick={onGoToJobs}>
                  View all ↗
                </button>

              </div>


              {/* JOB 1 */}
              <div className="job-row">

                <div className="job-time">
                  <CalendarDays size={17} />
                  <span>09:00 AM</span>
                </div>

                <div className="job-info">

                  <strong>
                    ABC Company
                  </strong>

                  <span>
                    Network issue
                  </span>

                  <small>
                    <MapPin size={13} />
                    Kolkata
                  </small>

                </div>

                <div className="job-technician">

                  <div>
                    R
                  </div>

                  Rahul

                </div>

                <span className="job-status progress">
                  In Progress
                </span>

              </div>


              {/* JOB 2 */}
              <div className="job-row">

                <div className="job-time">
                  <CalendarDays size={17} />
                  <span>11:30 AM</span>
                </div>

                <div className="job-info">

                  <strong>
                    XYZ Company
                  </strong>

                  <span>
                    Router replacement
                  </span>

                  <small>
                    <MapPin size={13} />
                    Kolkata
                  </small>

                </div>

                <div className="job-technician">

                  <div>
                    P
                  </div>

                  Priya

                </div>

                <span className="job-status scheduled">
                  Scheduled
                </span>

              </div>


              {/* JOB 3 */}
              <div className="job-row">

                <div className="job-time">
                  <CalendarDays size={17} />
                  <span>02:00 PM</span>
                </div>

                <div className="job-info">

                  <strong>
                    Global Tech
                  </strong>

                  <span>
                    Internet installation
                  </span>

                  <small>
                    <MapPin size={13} />
                    Kolkata
                  </small>

                </div>

                <div className="job-technician">

                  <div>
                    A
                  </div>

                  Amit

                </div>

                <span className="job-status scheduled">
                  Scheduled
                </span>

              </div>


              {/* JOB 4 */}
              <div className="job-row">

                <div className="job-time">
                  <CalendarDays size={17} />
                  <span>04:30 PM</span>
                </div>

                <div className="job-info">

                  <strong>
                    Nova Systems
                  </strong>

                  <span>
                    CCTV maintenance
                  </span>

                  <small>
                    <MapPin size={13} />
                    Kolkata
                  </small>

                </div>

                <div className="job-technician">

                  <div>
                    S
                  </div>

                  Suman

                </div>

                <span className="job-status scheduled">
                  Scheduled
                </span>

              </div>

            </div>


            {/* REQUEST OVERVIEW */}
            <div className="overview-panel">

              <div className="panel-header">

                <div>

                  <h2>
                    Request Overview
                  </h2>

                  <span>
                    Current service requests
                  </span>

                </div>

                <BarChart3 size={20} />

              </div>


              {/* NEW */}
              <div className="overview-item">

                <div>
                  <span>New</span>
                  <strong>12</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-blue"></div>
                </div>

              </div>


              {/* IN PROGRESS */}
              <div className="overview-item">

                <div>
                  <span>In Progress</span>
                  <strong>18</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-green"></div>
                </div>

              </div>


              {/* COMPLETED */}
              <div className="overview-item">

                <div>
                  <span>Completed</span>
                  <strong>42</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-purple"></div>
                </div>

              </div>


              {/* PRIORITY ALERT */}
              <div className="priority-alert">

                <div className="alert-icon">
                  !
                </div>

                <div>

                  <strong>
                    3 high priority requests
                  </strong>

                  <span>
                    Need technician assignment
                  </span>

                </div>

                <span>
                  ↗
                </span>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;