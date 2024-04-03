import { format } from "date-fns";
import { DATE_FORMAT } from "@constants";

const formatDate = (start_time, end_time) => {
  const formattedStartTime = format(
    start_time,
    DATE_FORMAT.MONTH_DAY_HOUR_MINUTE
  );
  const formattedEndTime = format(end_time, DATE_FORMAT.MONTH_DAY_HOUR_MINUTE);
  return `${formattedStartTime} - ${formattedEndTime}`;
};

export default formatDate;
