class DigitalClock {
  constructor(element) {
    this.element = element;
    console.log(this.element);
  }
  start() {
    setInterval(() => {
      this.update();
    }, 0);
  }

  update() {
    const time = this.getTime();
    const minuteFormat = time.minute.toString().padStart(2, "0");
    const secondFormat = time.second.toString().padStart(2, "0");
    const timeFormat = `${time.hour}:${minuteFormat}:${secondFormat}`;
    const amPm = time.isAm ? "AM" : "PM";

    const day = time.day;
    const month = time.month;
    const year = time.year;
    const dateFormat = `${time.day}-${time.month}-${time.year}`;

    this.element.querySelector(".clock-time").textContent = timeFormat;
    this.element.querySelector(".date").textContent = dateFormat;
    this.element.querySelector(".clock-ampm").textContent = amPm;
  }
  getTime() {
    const now = new Date();
    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      second: now.getSeconds(),
      isAm: now.getHours() < 12,

      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();
