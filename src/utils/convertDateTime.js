const convertTimestamp = (
    unixTimeStamp,
    options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    },
    isTime = false
) => {
    const date = new Date(unixTimeStamp * 1000);

    if (isTime) return date.toLocaleTimeString("en-US", options);

    let formattedDate = date.toLocaleDateString("en-US", options);
    const [weekday, month, day, year] = formattedDate.split(' ');
    formattedDate = `${weekday.replace(",", "")} | ${parseInt(day)} ${month} ${year}`;

    return formattedDate;
};

export { convertTimestamp }