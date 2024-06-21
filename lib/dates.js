import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

function isoDateFormat (date) {
    return format(date, 'yyyy-MM-dd')
}

function ymDateFormat (date) {
    return format(date, 'yyyy-MM')
}

function parseDateTime (text) {
    return parseISO(text)
}

function isoDateTimeFormat (date) {
    return format(date, 'yyyy-MM-dd HH:mm:ss')
}

function isoDateTimeFormatT (date) {
    return isoDateTimeFormat(date).replace(' ', 'T')
}

function startOfMonthStr (date) {
  return isoDateFormat(startOfMonth(date))
}

function endOfMonthStr (date) {
  return isoDateFormat(endOfMonth(date))
}

export {
  isoDateFormat,
  ymDateFormat,
  parseDateTime,
  isoDateTimeFormat,
  isoDateTimeFormatT,
  startOfMonthStr,
  endOfMonthStr,
}
