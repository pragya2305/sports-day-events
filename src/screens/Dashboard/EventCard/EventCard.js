import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { format } from "date-fns";
import { DATE_FORMAT } from "@enums";
import styles from "./EventCard.css";

const EventCard = ({ item, type, actionfn, disableAction }) => {
  const { event_name, event_category, start_time, end_time } = item;

  const formattedStartTime = format(
    start_time,
    DATE_FORMAT.MONTH_DAY_HOUR_MINUTE
  );
  const formattedEndTime = format(end_time, DATE_FORMAT.MONTH_DAY_HOUR_MINUTE);

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
          {`${formattedStartTime} - ${formattedEndTime}`}
        </Typography>
      </CardContent>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
      >
        <Button
          variant='contained'
          color={type.buttonColor}
          onClick={() => actionfn(item)}
          disabled={disableAction}
        >
          {type.buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default memo(EventCard);
