import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/chat");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.logo}>RealtimeChat</h1>
        <p style={styles.tagline}>
          Connect with friends and the world around you.
        </p>
      </div>

      <div style={styles.right}>
        <form onSubmit={handleSubmit} style={styles.card}>
          <input
            type="email"
            placeholder="Email address"
            style={styles.input}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <button type="submit" style={styles.loginBtn}>
            Log In
          </button>

          <Link to="/register" style={styles.createBtn}>
            Create New Account
          </Link>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    flex: 1,
    padding: "40px",
  },
  logo: {
    color: "#1877f2",
    fontSize: "48px",
    fontWeight: "bold",
  },
  tagline: {
    fontSize: "20px",
  },
  right: {
    flex: 1,
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "350px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1877f2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
  createBtn: {
    display: "block",
    marginTop: "15px",
    textAlign: "center",
    backgroundColor: "#42b72a",
    padding: "10px",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
  },
};
