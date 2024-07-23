const convertTimestamp = (
    unixTimeStamp,
    timezoneOffset,
    hour12 = false,
) => {
    // Convert to milliseconds and create date object
    const date = new Date(unixTimeStamp * 1000);

    // Get each time param
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: hour12 });
    const tz = timezoneOffset / 3600;
    const timezone = `UTC${tz > 0 ? '+' : ''}${tz}`;

    // Store time object
    const dateTimeObject = {
        weekday: weekday,
        day: day,
        month: month,
        year: year,
        time: time,
        timezone: timezone,
    }

    return dateTimeObject;
};

export { convertTimestamp }