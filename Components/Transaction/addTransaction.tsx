"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import useAddForm from "../Hooks/useAddTransaction";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormHelperText from '@mui/material/FormHelperText';

export default function AddTransaction() {
  const { formik } = useAddForm();

  const handleChange = (event: SelectChangeEvent) => {
    formik.setFieldValue("category",event.target.value)
  };
  return (
    <div className="main-container">
      <h2 className="main-heading">Add Transaction</h2>
      <div className="box-container">
        <div className="text-input">
          <TextField
            id="standard-helperText"
            variant="standard"
            label="Description"
            {...formik.getFieldProps("description")}
            helperText={formik.touched.description && formik.errors.description}
          />
        </div>
        <div>
          <TextField
          type="number"
            id="standard-helperText"
            variant="standard"
            label="Amount"
            {...formik.getFieldProps("amount")}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={handleChange}
              label="Category"
            //   {...formik.getFieldProps("category")}
            >
              <MenuItem value={"Groceries"}>Groceries</MenuItem>
              <MenuItem value={"Rent"}>Rent</MenuItem>
              <MenuItem value={"Salary"}>Salary</MenuItem>
              <MenuItem value={"Medical"}>Medical</MenuItem>
            </Select>
            <FormHelperText>{formik.touched.category && formik.errors.category}</FormHelperText>
          </FormControl>
        </div>
        <div className="flex justify-center mt-2">
        <Button
          className="add-btn"
          variant="contained"
          onClick={() => formik.handleSubmit()}
        >
          Add Transaction
        </Button>
        </div>
      </div>
    </div>
  );
}
