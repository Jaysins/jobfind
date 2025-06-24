import axios from 'axios';
const api = axios.create({ baseURL: "https://jobfind-qtud.onrender.com" });

export async function submitWaitlist({ name, email }) {
  try {
    const res = await api.post('/add', { name, email });
    return res.data;
  } catch (err) {
    // Axios wraps non-2xx in err.response
    if (err.response) {
      const status = err.response.status;
      const data = err.response.data || {};
      if (status === 400 && data.detail == "Email already exists in waitlist") {
        // Duplicate
        const msg = data.detail;
        const e = new Error(msg);
        e.code = "ALREADY_EXISTS";
        throw e;
      }
      // Handle other known statuses if desired, e.g., 400:
      if (status === 400) {
        const msg = data.detail || "Invalid input.";
        throw new Error(msg);
      }
      // Generic HTTP error
      const msg = data.detail || `Request failed with status ${status}`;
      throw new Error(msg);
    }
    // Network or other error without response
    throw err;
  }
}




export async function triggerBase() {
  try {
    // Adjust to your actual ping endpoint
    await api.get('/docs');
  } catch (err) {
    console.warn("Backend wake-up failed (can ignore if cold start)", err);
  }
}
