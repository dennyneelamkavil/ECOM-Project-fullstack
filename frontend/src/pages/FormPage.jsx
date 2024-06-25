import React, { useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addProduct, getProductById, updateProduct } from "../apis";
import { useParams } from "react-router-dom";

export default function FormPage() {
  const { handleSubmit, register, reset, setValue } = useForm();

  const {id} = useParams()
  const isEdit = Boolean(id);

  const loadData = async () => {
    if(!isEdit) return;
    try {
      const res = await getProductById(id);
      let formData = res.data;
      Object.keys(formData).forEach((key) => {
        setValue(key, formData[key]);
      })
    } catch (error) {
      toast.error("Failed to load product");
    }
  }

  useEffect(() => {
    loadData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const formdata = new FormData();
      Object.keys(data).forEach((key) => {
        formdata.append(key, data[key]);
      });
      const fileInput = document.getElementById("image");
      if (fileInput && fileInput.files[0]) {
        formdata.append("image", fileInput.files[0]);
      }
      // for (let [key, value] of formdata.entries()) {
      //   console.log(key, value);
      // }
      isEdit ? await updateProduct(id, formdata) : await addProduct(formdata);
      toast.success("Product added successfully");
      reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <Box
          margin={5}
          padding={3}
          component={Paper}
          elevation={6}
          sx={{
            backgroundColor: "#f0f0f0",
          }}
        >
          <Typography variant="h4" align="center" marginBottom={2}>
            {isEdit ? "Edit Product" : "Add Product"}
          </Typography>
          <Grid container component={"form"} onSubmit={handleSubmit(onSubmit)} spacing={2} justifyContent={"center"}>
            <Grid item xs={12} md={6}>
              <TextField label="Title" variant="outlined" sx={{ width: "100%" }} {...register("title")} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Category" variant="outlined" sx={{ width: "100%" }} {...register("category")} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Description" variant="outlined" sx={{ width: "100%" }} {...register("description")} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Quantity" variant="outlined" sx={{ width: "100%" }} {...register("quantity")} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Price" variant="outlined" sx={{ width: "100%" }} {...register("price")} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Upload Image</Typography>
              <input type="file" name="image" id="image" />
            </Grid>
            <Button variant="contained" sx={{ width: "30%", marginTop: 2 }} type="submit">
              {isEdit ? "Update Product" : "Add Product"}
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
