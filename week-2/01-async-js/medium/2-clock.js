//Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
//clock that shows you the current machine time?

//Can you make it so that it updates every second, and shows time in the following formats -

//- HH:MM::SS (Eg. 13:45:23)

//- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  setTimeout(function () {
    let d = new Date();
    let meridian = d.getHours() >= 12 ? "PM" : "AM";
    let hour = d.getHours() > 12 ? d.getHours() % 12 : d.getHours();
    const formattedHours = hour < 10 ? `0${hour}` : hour;
    const formattedMinutes =
      d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    const formattedSeconds =
      d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
    console.clear();
    console.log(
      formattedHours +
        ":" +
        formattedMinutes +
        ":" +
        formattedSeconds +
        " " +
        meridian
    );
    clock();
  }, 1000);
}

clock();
