import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker, { CalendarContainer } from "react-datepicker";

const RegisterUser = () => {
  console.log("---RegisterUser");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const PHONE_REGEX = new RegExp("^[7-9][0-9]{9}$");

  const onSubmit = (data) => {
    console.log("DATA : ---------------");
    console.log("DATA ...: " + JSON.stringify(data));
  };

  return (
    <>
      <div className="login-box">
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <label>First Name: </label>
              <input
                type="text"
                placeholder="First name"
                {...register("firstname", {
                  required: true,
                  minLength: 3,
                  maxLength: 80,
                })}
              />
              {errors.firstname?.type === "required" && (
                <p className="text-danger">Required!</p>
              )}
              {(errors.firstname?.type === "minLength" ||
                errors.firstname?.type === "maxLength") && (
                <p className="text-danger">Min 3 - Max 80</p>
              )}
            </div>
            <div className="input-group mb-3">
              <label>Last Name: </label>
              <input
                type="text"
                placeholder="Last name"
                {...register("lastname", {
                  required: true,
                  minLength: 3,
                  maxLength: 80,
                })}
              />
              {errors.lastname?.type === "required" && (
                <p className="text-danger">Required!</p>
              )}
              {(errors.lastname?.type === "minLength" ||
                errors.lastname?.type === "maxLength") && (
                <p className="text-danger">Min 3 - Max 80</p>
              )}
            </div>
            <div className="input-group mb-3">
              <label>Email: </label>
              <input
                type="text"
                placeholder="Email"
                {...register("userEmail", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.userEmail?.type === "required" && (
                <p className="text-danger">Required!</p>
              )}
              {errors.userEmail?.type === "pattern" && (
                <p className="text-danger">Invalid Format</p>
              )}
            </div>
            <div className="input-group mb-3">
              <label>Password: </label>
              <input
                type="password"
                placeholder="Password"
                {...register("userPassword", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              />
              {errors.userPassword?.type === "required" && (
                <p className="text-danger">Required!</p>
              )}
              {(errors.userPassword?.type === "minLength" ||
                errors.userPassword?.type === "maxLength") && (
                <p className="text-danger">Min 8 - Max 20</p>
              )}
            </div>
            <div className="input-group mb-3">
              <label>Confirm Password: </label>
              <input
                type="Password"
                placeholder="Confirm Password"
                {...register("userPasswordC", { required: true })}
              />
              {errors.userPasswordC?.type === "required" && (
                <p className="text-danger">Required!</p>
              )}
              {(errors.userPasswordC?.type === "minLength" ||
                errors.userPasswordC?.type === "maxLength") && (
                <p className="text-danger">Min 8 - Max 20</p>
              )}
            </div>
            <div className="input-group mb-3">
              <label>Mobile: </label>
              <Controller
                name="userMobile"
                control={control}
                rules={{
                  validate: (value) =>  isValidPhoneNumber(value),
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry="IN"
                    id="userMobile"
                  />
                )}
              />
              {errors["userMobile"] && (
                <p className="text-danger">Invalid Phone</p>
              )}
            </div>
            <div className="input-group mb-3">
              <label>Category: </label>
              <select {...register("category", { required: true })}>
                <option value="Student">Student</option>
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label>Date of Birth: </label>
              <Controller
                control={control}
                name="userDOB"
                render={({ field }) => (
                  <DatePicker
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
            </div>
            <div className="input-group mb-3">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
