import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import { addMonths } from "date-fns";

function isoDateFormat(date) {
  return format(date, "yyyy-MM-dd");
}

function ymDateFormat(date) {
  return format(date, "yyyy-MM");
}

function parseDateTime(text) {
  return parseISO(text);
}

function isoDateTimeFormat(date) {
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

function isoDateTimeFormatT(date) {
  return isoDateTimeFormat(date).replace(" ", "T");
}

function startOfMonthStr(date) {
  return isoDateFormat(startOfMonth(date));
}

function endOfMonthStr(date) {
  return isoDateFormat(endOfMonth(date));
}

function parseMonthToDate(month) {
  // parses the date independent if it contains the day or not
  if ((month.match(/-/g) || []).length === 1) {
    return parseDateTime(month + "-15");
  } else {
    return parseDateTime(month);
  }
  return null;
}

function monthsBetweenDates(start, end) {
  if (start > end) {
    throw new Error("Start date cannot be after end date");
  }
  let months = [];
  let current = start;
  while (current <= end) {
    months.push(ymDateFormat(current));
    current = addMonths(current, 1);
  }
  return months;
}

export {
  isoDateFormat,
  ymDateFormat,
  parseDateTime,
  isoDateTimeFormat,
  isoDateTimeFormatT,
  startOfMonthStr,
  endOfMonthStr,
  parseMonthToDate,
  monthsBetweenDates,
};
