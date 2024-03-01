"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImportProductService } from "@/api/services/ImportProductService";
// Define validation schema using yup
const schema = yup.object({
  ownerDetails: yup.object().shape({
    citizenship: yup.string().required("Citizenship is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    address: yup.string().required("Address is required"),
  }),
  businessDetails: yup.object().shape({
    businessType: yup.string().required("Business type is required"),
    companyName: yup.string().required("Company name is required"),
    tinNumber: yup.string().required("TIN number is required"),
    registrationDate: yup.string().required("Registration date is required"),
    businessAddress: yup.string().required("Business address is required"),
  }),
  productDetails: yup.object().shape({
    importationPurpose: yup
      .string()
      .required("Importation purpose is required"),
    productCategory: yup.string().required("Product category is required"),
    weight: yup.number().required("Weight is required"),
    measurementUnit: yup.string().required("Measurement unit is required"),
    productQuantity: yup.number().required("Product quantity is required"),
    productDescription: yup
      .string()
      .required("Product description is required"),
  }),
});

export default function ImportRequestForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, handleLoading] = useState<Boolean>(false);

  const sendData = async (data: any) => {
    const importProductService = new ImportProductService();
    try {
      console.log(data);
      const response = await importProductService.sendRequestDetailsToEmail(
        data
      );

      console.log("response : ", response);

      toast.success("Data sent to your email successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });

      handleLoading(false);
      //   onClose();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while sending the request", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 justify-items-center"
      onSubmit={handleSubmit(sendData)}
    >
      <h2 className="text-xl font-bold text-center mb-4 mt-2">
        Import Request Form
      </h2>

      {/* Owner Details Section */}
      <fieldset className="border border-gray-300 rounded p-4 w-[40%]">
        <legend className="text-base font-medium text-gray-700">
          Owner Details
        </legend>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.citizenship"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Citizenship:
            </label>
            <input
              type="text"
              id="ownerDetails.citizenship"
              {...register("ownerDetails.citizenship", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.ownerDetails?.citizenship ? "border-red-500" : ""
              }`}
            />
            {errors.ownerDetails?.citizenship && (
              <span className="text-red-500 text-xs">
                {errors.ownerDetails.citizenship.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.citizenship"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Phone number:
            </label>
            <input
              type="number"
              id="ownerDetails.phoneNumber"
              {...register("ownerDetails.phoneNumber", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.ownerDetails?.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.ownerDetails?.phoneNumber && (
              <span className="text-red-500 text-xs">
                {errors.ownerDetails.phoneNumber.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.citizenship"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Email address:
            </label>
            <input
              type="email"
              id="ownerDetails.email"
              {...register("ownerDetails.email", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.ownerDetails?.email ? "border-red-500" : ""
              }`}
            />
            {errors.ownerDetails?.email && (
              <span className="text-red-500 text-xs">
                {errors.ownerDetails.email.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.citizenship"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Owner address:
            </label>
            <input
              type="text"
              id="ownerDetails.address"
              {...register("ownerDetails.address", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.ownerDetails?.address ? "border-red-500" : ""
              }`}
            />
            {errors.ownerDetails?.address && (
              <span className="text-red-500 text-xs">
                {errors.ownerDetails.address.message}
              </span>
            )}
          </div>
        </div>
      </fieldset>
      <fieldset className="border border-gray-300 rounded p-4 w-[40%]">
        <legend className="text-base font-medium text-gray-700">
          Business Details
        </legend>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.citizenship"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Business Type:
            </label>
            <input
              type="text"
              id="businessDetails.businessType"
              {...register("businessDetails.businessType", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.businessDetails?.businessType ? "border-red-500" : ""
              }`}
            />
            {errors.businessDetails?.businessType && (
              <span className="text-red-500 text-xs">
                {errors.businessDetails.businessType.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.companyName"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Company name:
            </label>
            <input
              type="text"
              id="businessDetails.companyName"
              {...register("businessDetails.companyName", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.businessDetails?.companyName ? "border-red-500" : ""
              }`}
            />
            {errors.businessDetails?.companyName && (
              <span className="text-red-500 text-xs">
                {errors.businessDetails.companyName.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.companyName"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              TIN number:
            </label>
            <input
              type="text"
              id="businessDetails.tinNumber"
              {...register("businessDetails.tinNumber", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.businessDetails?.tinNumber ? "border-red-500" : ""
              }`}
            />
            {errors.businessDetails?.tinNumber && (
              <span className="text-red-500 text-xs">
                {errors.businessDetails.tinNumber.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.companyName"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Registration Date:
            </label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              id="businessDetails.registrationDate"
              {...register("businessDetails.registrationDate", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.businessDetails?.registrationDate ? "border-red-500" : ""
              }`}
            />
            {errors.businessDetails?.registrationDate && (
              <span className="text-red-500 text-xs">
                {errors.businessDetails.registrationDate.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="ownerDetails.companyName"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Business Address:
            </label>
            <input
              type="text"
              id="businessDetails.businessAddress"
              {...register("businessDetails.businessAddress", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.businessDetails?.businessAddress ? "border-red-500" : ""
              }`}
            />
            {errors.businessDetails?.businessAddress && (
              <span className="text-red-500 text-xs">
                {errors.businessDetails.businessAddress.message}
              </span>
            )}
          </div>
        </div>
      </fieldset>
      <fieldset className="border border-gray-300 rounded p-4 w-[40%]">
        <legend className="text-base font-medium text-gray-700">
          Product Information
        </legend>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label
              htmlFor="productDetails.importationPurpose"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Importation Purpose:
            </label>
            <input
              type="text"
              id="productDetails.importationPurpose"
              {...register("productDetails.importationPurpose", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.productDetails?.importationPurpose
                  ? "border-red-500"
                  : ""
              }`}
            />
            {errors.productDetails?.importationPurpose && (
              <span className="text-red-500 text-xs">
                {errors.productDetails.importationPurpose.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="productDetails.productCategory"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Product Category:
            </label>
            <input
              type="text"
              id="productDetails.productCategory"
              {...register("productDetails.productCategory", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.productDetails?.productCategory ? "border-red-500" : ""
              }`}
            />
            {errors.productDetails?.productCategory && (
              <span className="text-red-500 text-xs">
                {errors.productDetails.productCategory.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="productDetails.weight"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Weight:
            </label>
            <input
              type="number"
              id="productDetails.weight"
              {...register("productDetails.weight", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.productDetails?.weight ? "border-red-500" : ""
              }`}
            />
            {errors.productDetails?.weight && (
              <span className="text-red-500 text-xs">
                {errors.productDetails.weight.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="productDetails.measurementUnit"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Measurement unit:
            </label>
            <input
              type="text"
              id="productDetails.measurementUnit"
              {...register("productDetails.measurementUnit", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.productDetails?.measurementUnit ? "border-red-500" : ""
              }`}
            />
            {errors.productDetails?.measurementUnit && (
              <span className="text-red-500 text-xs">
                {errors.productDetails.measurementUnit.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="productDetails.productQuantity"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Product Quantity:
            </label>
            <input
              type="text"
              id="productDetails.productQuantity"
              {...register("productDetails.productQuantity", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.productDetails?.productQuantity ? "border-red-500" : ""
              }`}
            />
            {errors.productDetails?.productQuantity && (
              <span className="text-red-500 text-xs">
                {errors.productDetails.productQuantity.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="productDetails.productDescription"
              className="mr-4 text-sm font-medium text-gray-700"
            >
              Product Description:
            </label>
            <input
              type="text"
              id="productDetails.productDescription"
              {...register("productDetails.productDescription", {
                required: true,
              })}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue ${
                errors.productDetails?.productDescription
                  ? "border-red-500"
                  : ""
              }`}
            />
            {errors.productDetails?.productDescription && (
              <span className="text-red-500 text-xs">
                {errors.productDetails.productDescription.message}
              </span>
            )}
          </div>
        </div>
      </fieldset>
      <input
        type="submit"
        className="px-4 py-2 rounded-md bg-black text-white hover:bg-primary-blue-dark focus:outline-none focus:ring-primary-blue focus:ring-offset-2"
        value="Submit"
      />
    </form>
  );
}
