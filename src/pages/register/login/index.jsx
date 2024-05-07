import CustomForm from "@/components/customForms";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters"),
  agreeToTerms: yup.bool().oneOf([true], "You must accept the terms"),
});

export default function Login() {
  const router = useRouter();

  const fields = [
    {
      label: "Your Name",
      name: "name",
      type: "text",
      placeholder: "John Doe",
      col: 12,
    },
    {
      label: "E-mail",
      name: "email",
      type: "text",
      placeholder: "JohnDoe@example.com",
      col: 12,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "At least 8 characters",
      col: 12,
    },
  ];

  const onSubmit = (data) => {
    if (data.name !== "admin") {
      toast.error("Username must be admin");
    } else {
      localStorage.setItem("username", data.name);
      toast.success("You have entered successfully");
      router.reload();
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Grid container spacing={0} style={{ flex: 1 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            maxWidth="sm"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                height: "100%",
                display: "flex",
                alignItems: "center",
              },
            })}
          >
            <Paper
              style={{
                backgroundColor: "#f0f0f0",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ mb: 5 }}>
                Fiber
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                Create Your Fiber Account
              </Typography>
              <CustomForm
                fullWidth
                fields={fields}
                onSubmit={onSubmit}
                validationSchema={schema}
              />
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            style={{
              backgroundColor: "purple",
              color: "white",
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              alt="Image"
              width={600}
              height={440}
              src="/assets/Sign.png"
              priority
            />
            <Typography variant="body2" style={{ marginTop: "16px" }}>
              I agree to the Terms and Conditions
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
