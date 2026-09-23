import { useState } from "react";

import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import ServiceRequests from "./pages/ServiceRequests.jsx";
import Technicians from "./pages/Technicians.jsx";
import Jobs from "./pages/jobs.jsx";
import Dispatch from "./pages/Dispatch.jsx";

function App() {
  const [page, setPage] = useState("dashboard");


  // ================= LOGIN =================

  if (page === "login") {
    return (
      <Login
        onGoToDashboard={() => setPage("dashboard")}
      />
    );
  }


  // ================= SERVICE REQUESTS =================

  if (page === "requests") {
    return (
      <ServiceRequests
        onGoToDashboard={() => setPage("dashboard")}
        onGoToLogin={() => setPage("login")}
        onGoToTechnicians={() => setPage("technicians")}
      />
    );
  }


  // ================= TECHNICIANS =================

  if (page === "technicians") {
    return (
      <Technicians
        onGoToDashboard={() => setPage("dashboard")}
        onGoToLogin={() => setPage("login")}
        onGoToRequests={() => setPage("requests")}
        onGoToJobs={() => setPage("jobs")}
      />
    );
  }


  // ================= JOBS =================

  if (page === "jobs") {
    return (
      <Jobs
        onGoToDashboard={() => setPage("dashboard")}
        onGoToLogin={() => setPage("login")}
        onGoToRequests={() => setPage("requests")}
        onGoToTechnicians={() => setPage("technicians")}
        onGoToDispatch={() => setPage("dispatch")}
      />
    );
  }


  // ================= DISPATCH =================

  if (page === "dispatch") {
    return (
      <Dispatch
        onGoToDashboard={() => setPage("dashboard")}
        onGoToJobs={() => setPage("jobs")}
        onGoToTechnicians={() => setPage("technicians")}
        onGoToRequests={() => setPage("requests")}
        onGoToLogin={() => setPage("login")}
      />
    );
  }


  // ================= DASHBOARD =================

  return (
    <Dashboard
      onGoToLogin={() => setPage("login")}
      onGoToRequests={() => setPage("requests")}
      onGoToTechnicians={() => setPage("technicians")}
      onGoToJobs={() => setPage("jobs")}
      onGoToDispatch={() => setPage("dispatch")}
    />
  );
}

export default App;