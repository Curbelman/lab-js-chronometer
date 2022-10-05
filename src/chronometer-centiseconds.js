class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this. currentTime += 1;
      if (printTimeCallback){
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime/100)%60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime%100);
  }

  computeTwoDigitNumber(value) {
    return ('0'+value).slice(-2);
}

stop() {
  clearInterval(this.intervalId);
}

reset() {
  this.currentTime = 0;
}

split() {
  const splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
  const splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
  const splitCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
  return `${splitMinutes}:${splitSeconds}.${splitCentiseconds}`; 
}
}