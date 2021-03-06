import fs from 'fs';
import moment from 'moment';

export function convertFrameCountToDurationString(
  frameCount: number,
  format = 'm:ss'
): string {
  const duration = moment.duration((frameCount + 123) / 60, 'seconds');
  return moment.utc(duration.as('milliseconds')).format(format);
}

function convertToDateAndTime(
  dateTimeString: moment.MomentInput
): moment.Moment | null {
  const asMoment = moment(dateTimeString);
  if (asMoment.isValid()) {
    return asMoment.local();
  }

  return null;
}
export const dateObj = (date: Date) => ({
  year: date.getFullYear(),
  month: date.getMonth() > 10 ? `${date.getMonth()}` : `0${date.getMonth()}`,
  day: date.getDate(),
});

export function fileToDateAndTime(
  dateTimeString: string | undefined | null,
  fileName: string,
  fullPath: string
): moment.Moment | null {
  const startAt = convertToDateAndTime(dateTimeString);
  const getTimeFromFileName = () => filenameToDateAndTime(fileName);
  const getTimeFromBirthTime = () =>
    convertToDateAndTime(fs.statSync(fullPath).birthtime);

  return startAt || getTimeFromFileName() || getTimeFromBirthTime() || null;
}

function filenameToDateAndTime(fileName: string): moment.Moment | null {
  const timeReg = /\d{8}T\d{6}/g;
  const filenameTime = fileName.match(timeReg);

  if (filenameTime === null) {
    return null;
  }

  const time = moment(filenameTime[0]).local();
  return time;
}

export function monthDayHourFormat(time: moment.Moment): string | null {
  if (!moment.isMoment(time)) {
    return null;
  }

  return time.format('ll · LT');
}
export const getMonth = (date: Date | number) =>
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][typeof date === 'number' ? date : date.getMonth()];

export const formatAMPM = (date: Date): string => {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm: 'pm' | 'am' = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes}(${ampm})`;
  return strTime;
};
