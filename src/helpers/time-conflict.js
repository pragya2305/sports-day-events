import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const timeConflict = (timeRange1, timeRange2) => {
  var date1 = [moment(timeRange1[0]), moment(timeRange1[1])];
  var date2 = [moment(timeRange2[0]), moment(timeRange2[1])];

  var range1 = moment.range(date1);
  var range2 = moment.range(date2);

  return range1.overlaps(range2);
};

export default timeConflict;
