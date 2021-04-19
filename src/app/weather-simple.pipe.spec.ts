import { WeatherSimplePipe } from './weather-simple.pipe';

describe('WeatherSimplePipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherSimplePipe();
    expect(pipe).toBeTruthy();
  });
});
