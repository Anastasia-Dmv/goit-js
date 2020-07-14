class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector,
            this.targetDate = targetDate,

            this.refs = {
                days: document.querySelector('[data-value="days"]'),
                hours: document.querySelector('[data-value="hours"]'),
                mins: document.querySelector('[data-value="mins"]'),
                secs: document.querySelector('[data-value="secs"]'),
            }
        this.start();
    };

    calcFromDeltaTime(deltaTime) {
        const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
        this.changeTextContent(days, hours, mins, secs);

    };
    changeTextContent(days, hours, mins, secs) {

        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;

    }
    findTimeDifference() {
        const currentDate = new Date().getTime();
        const futureDate = this.targetDate.getTime();
        const deltaTime = futureDate - currentDate;
        (deltaTime > 0) ? this.calcFromDeltaTime(deltaTime): this.showError();
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
    start() {
        this.findTimeDifference()
        setInterval(() => {
            this.findTimeDifference();

        }, 1000)
    };
    showError() {
        document.querySelector(this.selector).innerHTML = "The counting process is over";
    };
};
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
});