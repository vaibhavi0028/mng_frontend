"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaCalendarAlt } from "react-icons/fa";
import styles from "@/styles/SignIn.module.css";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  dob: z.string().nonempty({ message: "Date of Birth is required" }),
  keepLoggedIn: z.boolean().optional(),
});

const SignUpPat: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
          <p className={styles.subtitle}>
            Sign up to enjoy the features of M&G
          </p>
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
                      <label className={field.value ? styles.activeLabel : ""}>
                        Your Name
                      </label>
                    </>
                  )}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    {typeof errors.name.message === "string" ? errors.name.message : "Error"}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <Controller
                  name="dob"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Popover onOpenChange={(open) => setIsDatePickerVisible(open)}>
                      <PopoverTrigger asChild>
                        <div className={`${styles.dateInputWrapper} ${date ? styles.activeInput : ''} ${isDatePickerVisible ? styles.datePickerVisible : ''}`}>
                          <Input
                            {...field}
                            value={date ? format(date, "PP") : ""}
                            className={`${styles.input} ${errors.dob ? styles.errorInput : ""}`}
                            placeholder=" "
                            readOnly
                          />
                          <label className={date ? styles.activeLabel : "" }>
                            Date of Birth
                          </label>
                          <span
                            className={`${styles.calendarIcon} ${errors.dob ? styles.calendarIcon2 : ""}`}
                          >
                            <FaCalendarAlt />
                          </span>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className={styles.calendarPopover} align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => {
                            setDate(newDate);
                            field.onChange(newDate ? format(newDate, "yyyy-MM-dd") : "");
                          }}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.dob && (
                  <span className={styles.errorMessage}>
                    {typeof errors.dob.message === "string" ? errors.dob.message : "Error"}
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
                      <label className={field.value ? styles.activeLabel : ""}>
                        Email
                      </label>
                    </>
                  )}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>
                    {typeof errors.email.message === "string" ? errors.email.message : "Error"}
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
                      <label className={field.value ? styles.activeLabel : ""}>
                        Password
                      </label>
                      <span
                        className={`${styles.eyeIcon} ${errors.password ? styles.eyeIcon2 : ""}`}
                        onClick={handlePasswordVisibility}
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  )}
                />
                {errors.password && (
                  <span className={styles.errorMessage}>
                    {typeof errors.password.message === "string" ? errors.password.message : "Error"}
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

            <Button type="submit" className={styles.signInButton}>
              Sign Up
            </Button>

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

export default SignUpPat;
