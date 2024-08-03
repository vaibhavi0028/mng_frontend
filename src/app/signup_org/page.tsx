"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "@/styles/SignIn.module.css";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  name: z.string().min(1, { message: "Organisation Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  keepLoggedIn: z.boolean().optional(),
});

const SignUpOrg: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const hasError = !!errors.password;

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image
            src="/logo.png"
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
          <h1 className={styles.title}>Sign Up</h1>
          <p className={styles.subtitle}>Sign up to enjoy the feature of M&G</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroups}>
              <div className={styles.inputGroup}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
                        placeholder=" "
                      />
                      <label className={field.value ? styles.activeLabel : ""}>Organisation Name</label>
                    </>
                  )}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    {typeof errors.name.message === "string" && errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        className={`${styles.input} ${errors.address ? styles.errorInput : ""}`}
                        placeholder=" "
                      />
                      <label className={field.value ? styles.activeLabel : ""}>Address</label>
                    </>
                  )}
                />
                {errors.address && (
                  <span className={styles.errorMessage}>
                    {typeof errors.address.message === "string" && errors.address.message}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
                        placeholder=" "
                      />
                      <label className={field.value ? styles.activeLabel : ""}>Email</label>
                    </>
                  )}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>
                    {typeof errors.email.message === "string" && errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div className={styles.passwordContainer}>
                      <Input
                        {...field}
                        type={passwordVisible ? "text" : "password"}
                        className={`${styles.input} ${errors.password ? styles.errorInput : ""}`}
                        placeholder=" "
                      />
                      <label className={field.value ? styles.activeLabel : ""}>Password</label>
                      <span className={`${styles.eyeIcon} ${hasError ? styles.eyeIcon2 : ""}`} onClick={handlePasswordVisibility}>
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  )}
                />
                {errors.password && (
                  <span className={styles.errorMessage}>
                  {typeof errors.password.message === "string" && errors.password.message}
                </span>
                )}
              </div>
            </div>

            <div className={styles.checkboxGroup}>
              <Controller
                name="keepLoggedIn"
                control={control}
                render={({ field }) => (
                  <div className={styles.checkboxWrapper}>
                    <Checkbox
                      id="keepLoggedIn"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className={styles.checkbox}
                    />
                    <label htmlFor="keepLoggedIn" className={styles.checkboxLabel}>
                      Keep me logged in
                    </label>
                  </div>
                )}
              />
            </div>

            <Button type="submit" className={styles.signInButton}>Sign Up</Button>

            <div className={styles.orDivider}>
              <span>or</span>
            </div>

            <Button className={styles.googleButton}>
              Sign Up with Google
              <Image src="/google-logo.svg" alt="Google" width={20} height={20} />
            </Button>

            <p className={styles.createAccount}>
              Already have an account? <a href="/signin">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpOrg;
