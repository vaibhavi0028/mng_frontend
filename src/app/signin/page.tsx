"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "@/styles/SignIn.module.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </a>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image src="/signin.svg" alt="Sign In" width={400} height={400} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Sign In</h1>
          <p className={styles.subtitle}>
            Please login to continue to your account.
          </p>
          <div className={styles.inputGroups}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                className={email || emailFocused ? styles.activeInput : ""}
              />
              <label
                htmlFor="email"
                className={email || emailFocused ? styles.activeLabel : ""}
              >
                Email
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                className={
                  password || passwordFocused ? styles.activeInput : ""
                }
              />
              <label
                htmlFor="password"
                className={
                  password || passwordFocused ? styles.activeLabel : ""
                }
              >
                Password
              </label>
              <span
                className={styles.eyeIcon}
                onClick={handlePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
            />
            <label htmlFor="keepLoggedIn">Keep me logged in</label>
          </div>

          <button className={styles.signInButton}>Sign In</button>

          <div className={styles.orDivider}>
            <span>or</span>
          </div>

          <button className={styles.googleButton}>
            Sign In with Google
            <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
          </button>

          <p className={styles.createAccount}>
            Need an account? <a href="/signup_patient">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
