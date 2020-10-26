
const refs = {
  selector: document.querySelector('#timer-1'),
  daysEl: document.querySelector('span[data-value="days"]'),
  hoursEl: document.querySelector('span[data-value="hours"]'),
  minsEl: document.querySelector('span[data-value="mins"]'),
  secsEl: document.querySelector('span[data-value="secs"]'),
};


class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.updateClockface(time);
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.updateClockface(time);
    }, 1000);
  }

updateClockface({ days, hours, mins, secs }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minsEl.textContent = `${mins}`;
  refs.secsEl.textContent = `${secs}`;
}
  /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */
  getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 14, 2020'),
});

