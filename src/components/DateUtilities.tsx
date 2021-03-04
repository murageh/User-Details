import React from "react";

const customDateFormat = (formatString: string) => {
    /*
    Example:
    customFormat("2020-07-08T18:35:48.848969") returns "08-01-2020"
     */
    let temp = formatString.split("T")
    let rawDate = temp[0].split("-");

    return rawDate[2] + "-" + rawDate[1] + "-" + rawDate[0];
}

export default customDateFormat;