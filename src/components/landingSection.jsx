import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import CardList from "./cardList";

const LandingSection = () => {
  const imageArray = Array.from({ length: 5 });

  return (
    <>
      <Box sx={{ background: "#faf2e1" }}>
        <Container>
          <Box
            sx={{
              backgroundImage: `url(/assets/hero-Illustration.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "550px 548px",
              backgroundPosition: "right",
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              "@media (max-width: 768px)": {
                flexDirection: "column",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "auto",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                maxWidth: "50%",
                "@media (max-width: 768px)": {
                  maxWidth: "100%",
                  order: 2,
                  textAlign: "center",
                  marginBottom: "24px",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {imageArray.map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/star.svg"
                    alt="My SVG"
                    width={20}
                    height={20}
                  />
                ))}

                <Typography
                  variant="body2"
                  component="p"
                  color="secondary"
                  sx={{ m: 0, p: 0, marginLeft: "8px" }}
                >
                  Rated 4.8/5 (243 reviews)
                </Typography>
              </Box>
              <Typography
                variant="h3"
                component="h2"
                color="secondary"
                sx={{ mb: 2, mt: 2 }}
              >
                Create Your Portfolio in Minutes
              </Typography>
              <Typography variant="body1" color="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, metus vitae condimentum interdum, turpis ipsum
                venenatis ex, non tincidunt ante neque sit amet mauris.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Button
                  sx={{ mr: 2 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Start Free Trial
                </Button>
                <Link
                  href="#"
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Button Link
                </Link>
              </Box>
              <Grid container spacing={0} sx={{ mt: 3 }}>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      lignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Image
                      src="/assets/Checkmark.svg"
                      alt="My SVG"
                      width={20}
                      height={20}
                    />
                    No Credit Card Required
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      lignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Image
                      src="/assets/Checkmark.svg"
                      alt="My SVG"
                      width={20}
                      height={20}
                    />
                    No Credit Card Required
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container sx={{ mt: 5 }}>
        <Box component="section" sx={{ mb: 5 }}>
          <Box sx={{ width: "50%" }}>
            <Typography variant="body2" component="p" color="secondary">
              Why Fiber
            </Typography>
            <Typography
              variant="h4"
              component="p"
              color="secondary"
              sx={{ mt: 2 }}
            >
              A good Portfolio means good employability
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item sm={4}>
              <Image
                src="/assets/time.svg"
                alt="My SVG"
                width={35}
                height={35}
              />
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{ fontWeight: "bold", mt: 1 }}
              >
                Why Fiber
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, metus vitae condimentum interdum, turpis ipsum
                venenatis ex, non tincidunt ante neque sit amet mauris.
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Image
                src="/assets/code.svg"
                alt="My SVG"
                width={35}
                height={35}
              />
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{ fontWeight: "bold", mt: 1 }}
              >
                Why Fiber
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, metus vitae condimentum interdum, turpis ipsum
                venenatis ex, non tincidunt ante neque sit amet mauris.
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Image
                src="/assets/allSizes.svg"
                alt="My SVG"
                width={35}
                height={35}
              />
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{ fontWeight: "bold", mt: 1 }}
              >
                Why Fiber
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, metus vitae condimentum interdum, turpis ipsum
                venenatis ex, non tincidunt ante neque sit amet mauris.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{
            background: "#391096",
            color: "#fff",
            padding: 5,
            pb: 0,
            borderRadius: 3,
          }}
        >
          <Grid container spacing={3} sx={{ mt: 4, alignItems: "center" }}>
            <Grid item sm={6}>
              <Typography
                variant="body2"
                component="p"
                sx={{ fontWeight: "bold", mt: 1 }}
              >
                Why Fiber
              </Typography>
              <Typography variant="body2" component="p" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, metus vitae condimentum interdum, turpis ipsum
                venenatis ex, non tincidunt ante neque sit amet mauris.
              </Typography>
              <Button
                sx={{ mt: 3, background: "#fff", color: "#000" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit Form
              </Button>
            </Grid>
            <Grid item sm={6} sx={{ "& img": { maxWidth: "100%" } }}>
              <Image
                src="/assets/Page.png"
                alt="My SVG"
                width={650}
                height={488}
              />
            </Grid>
          </Grid>
        </Box>
        <CardList />
      </Container>
    </>
  );
};

export default LandingSection;
