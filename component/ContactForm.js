"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const submitForm = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccessMessage("Thank you! Your submission has been received!");
        reset();
      } else {
        setSuccessMessage("Failed to send your message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    shouldFocusError: false,
  });

  return (
    <div className="max-w-7xl w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 dark:bg-[#1f1f1f] bg-white text-black dark:text-white pt-30 items-center">
      <div className="contact-form-wrapper pt-20">
        <div className="contact headline-block">
          <div className="contact-headline uppercase lg:font-bold lg:text-[150px] lg:leading-[144px] lg:tracking-[-9.12px] lg:whitespace-nowra md:text-[95px] md:leading-[85px] tracking-[-3px] text-[52px] leading-[60px] ">
            Contact
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-4 text-2xl pt-30 gap-x-25">
          <div className="md:col-span-7 sm:col-span-1">
            {successMessage ? (
              <div className="bg-[#323232] p-4 text-xl">{successMessage}</div>
            ) : (
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="input-wrapper flex justify-between md:flex-row flex-col mb-8 gap-3">
                  <div className="input-name flex flex-col gap-4">
                    <label htmlFor="name">Name</label>
                    <input
                      {...register("name", {
                        required: "Name should not be empty!",
                        maxLength: { value: 50, message: "Name is too long" },
                      })}
                      className={`border dark:bg-[#323232] bg-white  text-black dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%] lg:w-[330px] md:w-full ${
                        errors.name ? "border-red-500" : "border-[#d1d6fd4]"
                      }`}
                      type="text"
                      placeholder="Enter your name"
                      id="name"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xm mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="input-email flex flex-col gap-4">
                    <label htmlFor="email">Email</label>
                    <input
                      {...register("email", {
                        required: "email should not be empty",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email",
                        },
                      })}
                      className={`lg:w-[330px] md:w-full  border text-black bg-white dark:bg-[#323232] dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%]  ${
                        errors?.email ? "border-red-500" : "border-[#d1d6d4]"
                      }`}
                      type="email"
                      placeholder="Enter address"
                      id="email"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="input-wrapper flex gap-3 justify-between md:flex-row flex-col mb-8">
                  <div className="input-company-name flex flex-col gap-4">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                      {...register("companyName", {
                        required: "Company name should not be empty",
                        maxLength: {
                          value: 50,
                          message: "Company name is too long",
                        },
                      })}
                      className={`lg:w-[330px] md:w-full  border dark:bg-[#323232] bg-white text-black dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%]  ${
                        errors.companyName
                          ? "border-red-500"
                          : "border-[#d1d6d4]"
                      }`}
                      type="text"
                      placeholder="Company Name"
                      id="company-name"
                    />
                    {errors.companyName && (
                      <span className="text-red-500 text-sn mt-1">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                  <div className="input-url flex flex-col gap-4">
                    <label htmlFor="web-url">Website URL (if any)</label>
                    <input
                      {...register("companyUrl", {
                        required: "Company url should not be empty",
                        pattern: {
                          value:
                            /^(https?:\/\/)?([\w\d-]+\.){1,}([a-zA-Z]{2,})(\/.*)?$/,
                          message: "Invalid URL",
                        },
                      })}
                      className={`lg:w-[330px] md:w-full  border dark:bg-[#323232] text-black bg-white dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%] ${
                        errors.companyUrl
                          ? "border-red-500"
                          : "border-[#d1d6d4]"
                      }`}
                      type="url"
                      placeholder="www.example.com"
                      id="web-url"
                    />
                    {errors.companyUrl && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.companyUrl.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="select-field-block flex lg:flex-col flex-col gap-4 lg:max-w-[686px]  md:w-full">
                  <label htmlFor="options">
                    What services are you looking for?(select all that apply)
                  </label>
                  <select
                    {...register("typeOfEdit", {
                      validate: (v) =>
                        v !== "select one" || "Please select a service",
                    })}
                    id="options"
                    className={`w-full  border dark:bg-[#323232] bg-white text-black dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%] ${
                      errors.typeOfEdit ? "border-red-500" : "border-[#d1d6d4]"
                    }`}
                  >
                    <option value="select one">select one...</option>
                    <option value="video-edit">Video Edit</option>
                    <option value="photo-edit">Photo Edit</option>
                  </select>
                  {errors.typeOfEdit && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.typeOfEdit.message}
                    </span>
                  )}
                </div>
                <div className="project-description flex flex-col mt-8 gap-3 ">
                  <label htmlFor="project">Project Description</label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                      maxLength: {
                        value: 5000,
                        message: "Description is Too long",
                      },
                    })}
                    placeholder="Write Here"
                    id="project"
                    className={`w-full text-[14px] border  min-h-[11.25rem] mb-0 py-[16px] px-[20px] overflow-auto h-auto 
                    bg-white text-black dark:bg-[#323232] dark:text-white 
                    ${
                      errors.description ? "border-red-500" : "border-[#d1d6d4]"
                    }`}
                  />
                  {errors.description && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </span>
                  )}
                </div>
                <div className="div mt-4 dark:bg-[#323232] text-white bg-[#9b36f2] justify-center flex gap-x-2 w-[176px] items-center py-[16px] px-[20px] mb-5  rounded-[1px]  text-[14px]">
                  <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? "Please wait... " : "  Send it over"}
                  </button>
                  <Image
                    src="https://cdn.prod.website-files.com/66dc6345d8e5c096070d8fa6/66dc647819b924db4dba0c31_Vector.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="w-auto h-auto"
                  />
                </div>
              </form>
            )}
          </div>

          <div className="md:col-span-4 sm:col-span-1 flex flex-col gap-y-[80px]">
            <div className="flex flex-col">
              <div className="location text-[14px] font-bold">
                Office Location
              </div>
              <div className="text-2xl dark:text-[#ffffffa3] text-black">
                JagatPur Chandlodiya
              </div>
            </div>
            <div className="flex flex-col">
              <div className="time text-[14px] font-bold">Office Time</div>
              <div className="text-2xl dark:text-[#ffffffa3] text-black">
                Monday - Sunday
              </div>
              <div className="text-2xl dark:text-[#ffffffa3] text-black">
                8am - 5pm
              </div>
            </div>
            <div className="flex flex-col pb-5">
              <div className="support text-[14px] font-bold">Support</div>
              <div className="text-2xl dark:text-[#ffffffa3] text-black">
                asedits098@gmail.com
              </div>
              <div className="text-2xl dark:text-[#ffffffa3] text-black">
                76002 96405
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
