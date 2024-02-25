"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const useAddForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const router=useRouter()
  const handleSubmit = (values) => {
    const existingData = JSON.parse(localStorage.getItem("data") || "[]");
    existingData.push(values)
    localStorage.setItem("data", JSON.stringify(existingData));
    router.push("/")
  };

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      category: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Please enter description"),
      amount: Yup.number().required("Please enter amount"),
      category: Yup.string().required("Please enter category"),
    }),
    onSubmit: (initialValues) => {
      handleSubmit(initialValues);
    },
  });

  return {
    formik,
    isModalOpen,
    setIsModalOpen,
  };
};

export default useAddForm;
