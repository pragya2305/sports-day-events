import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { formatDate } from "@helpers";
import styles from "./EventCard.css";

const EventCard = ({ item, type, actionfn, disableAction }) => {
  const { event_name, event_category, start_time, end_time } = item;

  return (
    <Card
      elevation={3}
      style={{
        marginBottom: "16px",
        borderRadius: "8px",
      }}
    >
      <CardContent>
        <Typography variant='h6' className={styles.title}>
          {event_name}
        </Typography>
        <Typography variant='body2' className={styles.description}>
          {event_category}
        </Typography>
        <Typography variant='body2' className={styles.dateRange}>
          {formatDate(start_time, end_time)}
        </Typography>
      </CardContent>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
      >
        <Button
          variant='contained'
          color={type?.buttonColor}
          onClick={() => actionfn(item)}
          disabled={disableAction}
        >
          {type?.buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default memo(EventCard);
