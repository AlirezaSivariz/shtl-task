// CardList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  Box,
} from "@mui/material";
import Image from "next/image";
import { addComment } from "@/redux/slice/commentsSlice";
import { toast } from "react-toastify";

const CustomCard = ({ logoSrc, title, description }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {/* Logo */}
            <Image src={logoSrc} alt="Logo" width={40} height={40} />
          </Grid>
          <Grid item>
            {/* Title */}
            <Typography variant="h6" component="h2" color="primary">
              {title}
            </Typography>
            {/* Description */}
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const CardList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  const [showTextField, setShowTextField] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");

  const handleButtonClick = () => {
    setShowTextField(true);
  };

  const handleSendButtonClick = () => {
    if (newCardTitle.trim() !== "" && newCardDescription.trim() !== "") {
      const newCard = {
        logoSrc: "/assets/User.svg",
        title: newCardTitle,
        description: newCardDescription,
      };

      dispatch(addComment(newCard));
      setNewCardTitle("");
      setNewCardDescription("");
      setShowTextField(false);
      toast.success("Go To Home Page");
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        {comments.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CustomCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Button onClick={handleButtonClick}>Add Comment</Button>
      {showTextField && (
        <>
          <TextField
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            label="New Card Title"
          />
          <TextField
            value={newCardDescription}
            onChange={(e) => setNewCardDescription(e.target.value)}
            label="New Card Description"
          />
          <Button onClick={handleSendButtonClick}>Send</Button>
        </>
      )}
    </Box>
  );
};

export default CardList;
