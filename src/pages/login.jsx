import {
  Mail,
  Lock,
  Eye,
  ArrowRight,
  CalendarDays,
  Users,
  BarChart3,
} from "lucide-react";

import "../styles/Login.css";

function Login({ onSignIn }) {
  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="brand">
          <div className="brand-icon">F</div>

          <div>
            <h1>
              Field<span>Sync</span>
            </h1>

            <p>FIELD SERVICE MANAGEMENT</p>
          </div>
        </div>

        <div className="login-left-content">

          <div className="small-title">
            SMARTER FIELD OPERATIONS
          </div>

          <h2>
            Sync Your Field.
            <br />
            <span>Simplify</span>
            <br />
            <span>Operations.</span>
          </h2>

          <p className="description">
            FieldSync helps service businesses manage requests,
            assign technicians, and track field operations —
            all in one place.
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-icon green">
                <CalendarDays size={22} />
              </div>

              <div>
                <strong>Manage Service Requests</strong>
                <p>Track and prioritize customer issues</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon blue">
                <Users size={22} />
              </div>

              <div>
                <strong>Assign Technicians</strong>
                <p>Right person. Right job. On time.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon purple">
                <BarChart3 size={22} />
              </div>

              <div>
                <strong>Real-time Tracking</strong>
                <p>Stay updated, always</p>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-top">
          <span>New here?</span>

          <button className="create-account">
            Create an account
          </button>
        </div>

        <div className="login-form-container">

          <div className="welcome-label">
            WELCOME BACK
          </div>

          <h2>Welcome back</h2>

          <p className="login-subtitle">
            Sign in to your FieldSync account
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (onSignIn) {
                onSignIn();
              }
            }}
          >

            {/* EMAIL */}
            <div className="form-group">

              <label>Email address</label>

              <div className="input-wrapper">
                <Mail size={20} />

                <input
                  type="email"
                  placeholder="you@company.com"
                />
              </div>

            </div>


            {/* PASSWORD */}
            <div className="form-group">

              <label>Password</label>

              <div className="input-wrapper">
                <Lock size={20} />

                <input
                  type="password"
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="eye-button"
                >
                  <Eye size={19} />
                </button>

              </div>

            </div>


            {/* OPTIONS */}
            <div className="login-options">

              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot password?
              </button>

            </div>


            {/* SIGN IN */}
            <button
              type="submit"
              className="sign-in-button"
            >
              Sign In
              <ArrowRight size={20} />
            </button>

          </form>


          {/* OR */}
          <div className="or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>


          {/* GOOGLE */}
          <button className="social-button">

            <div className="google-icon">
              <span className="google-blue">G</span>
            </div>

            Continue with Google

          </button>


          {/* MICROSOFT */}
          <button className="social-button">

            <div className="microsoft-icon">
              <span className="ms-red"></span>
              <span className="ms-green"></span>
              <span className="ms-blue"></span>
              <span className="ms-yellow"></span>
            </div>

            Continue with Microsoft

          </button>


          <p className="terms">
            By signing in, you agree to our
            <span> Terms of Service </span>
            and
            <span> Privacy Policy.</span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;