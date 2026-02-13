import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/auth/register", form);
      alert("Registered Successfully ✅");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>ChatBook</h1>
        <p>Connect and chat with people in real-time.</p>
      </div>

      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
