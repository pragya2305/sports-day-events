import React, { memo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EventCard from "../EventCard";
import { Typography } from "@mui/material";
import { TechnicalError, Loader } from "@components";
import { timeBasedSort } from "@helpers";

const EventsList = ({
  type,
  actionfn,
  useService,
  eventListRef,
  disableAction,
}) => {
  const {
    data: events,
    isError,
    isLoading,
    isSuccess,
    isFetching,
  } = useService("");

  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "2px solid grey",
      }}
      height={700}
      width={700}
      ml={1.5}
      mt={1}
    >
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        mb={1}
        mt={1}
        align='center'
      >
        {type.title}
      </Typography>
      {isSuccess && (
        <Box sx={{ overflowY: "scroll" }} height={600} p={2}>
          {events.length ? (
            <>
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
              >
                {timeBasedSort(events)?.map((item, index) => (
                  <Grid item xs={6} sm={6} md={6} key={index}>
                    <EventCard
                      item={item}
                      type={type}
                      actionfn={actionfn}
                      disableAction={disableAction}
                    />
                  </Grid>
                ))}
              </Grid>
              <div ref={eventListRef} />
            </>
          ) : (
            <Typography
              variant='h6'
              component='h6'
              gutterBottom
              mt={25}
              align='center'
            >
              You have no events
            </Typography>
          )}
        </Box>
      )}
      {isFetching && !isLoading && (
        <Typography
          variant='overline'
          display='block'
          gutterBottom
          mb={5}
          align='center'
        >
          Loading More...
        </Typography>
      )}
      {isError && <TechnicalError />}
      {isLoading && <Loader />}
    </Box>
  );
};

export default memo(EventsList);
