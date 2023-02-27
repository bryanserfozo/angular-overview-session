export class Forcast {
    date: string;
    max: number;
    min: number;
    humidity: number;
    maxFeel: number;

    constructor(date: string, max: number, min: number, humidity: number) {
        this.date = date;
        this.max = max;
        this.min = min;
        this.humidity = humidity;
        this.maxFeel = 0;
    }
}


