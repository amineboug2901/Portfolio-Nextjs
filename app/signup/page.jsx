"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, authError } from "@/redux/authSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "@/app/login/login.module.css";
import { useState } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation"; // useRouter for client-side navigation
import Link from "next/link";
import Navbar from "@/sections/navbar/Navbar";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignupForm = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter(); // useRouter hook for navigation
  isAuthenticated && router.push("/");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      alert("Signup Successfull");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formContainer} style={{ position: "relative" }}>
          {loading && <Loading />}
          <h1 className={styles.title}>Signup</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                {...register("email")}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={styles.input}
                {...register("password")}
              />
              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}
            </div>
            <button type="submit" className={styles.button}>
              Register
            </button>
            <Link href="/login">Already a user? Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
