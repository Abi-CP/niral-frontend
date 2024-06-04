<script>
    import {navigate } from "svelte-routing";
    import { toast } from "svelte-french-toast";
    import { isAdminLoggedIn } from "../../stores/adminLoginStatus";
  import { serverUrl } from "../../../public/env";
  

  
    let rollNo = "";
    let password = "";
  
    function showToast(type, message) {
      if (type === "success") {
        toast.success(message);
      } else if (type === "error") {
        toast.error(message);
      }
    }
  
    const handleSubmit = async () => {
      // Validate form fields
      if (!rollNo || !password) {
        showToast("error", "Please fill in all fields.");
        return;
      }
  
      try {
        const response = await fetch(`${serverUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rollNo, password }),
        });
  
        if (response.ok) {
          const { token, userDetails } = await response.json();
          document.cookie = `adminAuthToken=${token}; path=/;`;
          sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
          isAdminLoggedIn.set(true);
          showToast("success", "Login successful!");
          navigate("/admin");

        } else {
          const responseData = await response.json();
          if (responseData.errorMessage) {
            showToast("error", responseData.errorMessage);
          } else {
            showToast("error", "An error occurred during login");
          }
        }
      } catch (error) {
        console.log("Error during login: ", error);
      }
    };
  </script>
  
  <div class="log-container">
    <h2 class="registration-text">Admin Login</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="log-form-group">
        <label for="rollNo">Roll No:</label>
        <input
          type="rollNo"
          id="rollNo"
          name="rollNo"
          placeholder="202317XXXX"
          required
          bind:value={rollNo}
        />
        <span class="icon"><i class="fas fa-envelope"></i></span>
      </div>
  
      <div class="log-form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          bind:value={password}
        />
        <span class="icon"><i class="fas fa-lock"></i></span>
      </div>
      <div class="log-form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
  
  <style>
    .log-container {
      max-width: 600px;
      margin: 20px 0;
      padding: 20px;
      width: 90vw;
      max-width: 600px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .log-form-group {
      margin-bottom: 20px;
      position: relative;
    }
  
    .log-form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    .log-form-group input[type="rollNo"],
    .log-form-group input[type="password"] {
      width: calc(100% - 20px);
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      position: relative;
      padding-left: 40px;
    }
  
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 55%;
      transform: translateY(10%);
      left: 10px;
      color: #888;
    }
  
    .log-form-group input[type="rollNo"]:last-child,
    .log-form-group input[type="password"]:last-child {
      margin-right: 0;
    }
  
    .log-form-group button {
      padding: 10px 20px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .log-form-group button:hover {
      background-color: #45a049;
    }
  
    .registration-text {
      text-align: center;
      margin-bottom: 20px;
    }
  </style>
  