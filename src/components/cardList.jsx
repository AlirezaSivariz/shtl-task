import React, { useState } from "react";
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
  const [showTextField, setShowTextField] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");
  const [cards, setCards] = useState([
    {
      logoSrc: "/assets/User.svg",
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, metus vitae condimentum interdum, turpis ipsum venenatis ex, non tincidunt ante neque sit amet mauris.",
    },
    {
      logoSrc: "/assets/User.svg",
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, metus vitae condimentum interdum, turpis ipsum venenatis ex, non tincidunt ante neque sit amet mauris.",
    },
  ]);

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

      setCards((prevCards) => [...prevCards, newCard]);
      setNewCardTitle("");
      setNewCardDescription("");
      setShowTextField(false);
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
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
