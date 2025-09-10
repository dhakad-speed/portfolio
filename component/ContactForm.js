"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
function ContactForm() {
  const submitForm = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="input-wrapper flex justify-between md:flex-row flex-col mb-8 gap-3">
                <div className="input-name flex flex-col gap-4">
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("name")}
                    className="border-transparent border dark:bg-[#323232] bg-white  text-black dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%] lg:w-[330px] md:w-full"
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                  />
                </div>
                <div className="input-email flex flex-col gap-4">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    className="lg:w-[330px] md:w-full border-transparent border text-black bg-white dark:bg-[#323232] dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%]"
                    type="email"
                    placeholder="Enter address"
                    id="email"
                  />
                </div>
              </div>
              <div className="input-wrapper flex gap-3 justify-between md:flex-row flex-col mb-8">
                <div className="input-company-name flex flex-col gap-4">
                  <label htmlFor="company-name">Company Name</label>
                  <input
                    {...register("companyName")}
                    className="lg:w-[330px] md:w-full border-transparent border dark:bg-[#323232] bg-white text-black dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%]"
                    type="text"
                    placeholder="Company Name"
                    id="company-name"
                  />
                </div>
                <div className="input-url flex flex-col gap-4">
                  <label htmlFor="web-url">Website URL (if any)</label>
                  <input
                    {...register("companyUrl")}
                    className="lg:w-[330px] md:w-full border-transparent border dark:bg-[#323232] text-black bg-white dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%]"
                    type="url"
                    placeholder="www.example.com"
                    id="web-url"
                  />
                </div>
              </div>
              <div className="select-field-block flex lg:flex-col flex-col gap-4 lg:max-w-[686px]  md:w-full">
                <label htmlFor="options">
                  What services are you looking for?(select all that apply)
                </label>
                <select
                  {...register("typeOfEdit")}
                  id="options"
                  className="w-full border-transparent border dark:bg-[#323232] bg-white text-black dark:text-white tracking-[-.16px] h-auto min-h-[56px] mb-0 py-[16px] px-[20px] text-[14px] font-medium leading-[150%]"
                >
                  <option value="select one">select one...</option>
                  <option value="video-edit">Video Edit</option>
                  <option value="photo-edit">Photo Edit</option>
                </select>
              </div>
              <div className="project-description flex flex-col mt-8 gap-3 ">
                <label htmlFor="project">Project Description</label>
                <textarea
                  {...register("description")}
                  placeholder="Write Here"
                  id="project"
                  maxLength={"5000"}
                  className="w-full text-[14px] bg-[#323232] text-white rounded  min-h-[11.25rem] mb-0 py-[16px] px-[20px] overflow-auto h-auto"
                ></textarea>
              </div>
              <div className="div mt-4 dark:bg-[#323232] text-white bg-[#9b36f2] justify-center flex gap-x-2 w-[176px] items-center py-[16px] px-[20px] mb-5  rounded-[1px]  text-[14px]">
                <button type="submit">Send it over</button>
                <img
                  src="https://cdn.prod.website-files.com/66dc6345d8e5c096070d8fa6/66dc647819b924db4dba0c31_Vector.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
            </form>
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
