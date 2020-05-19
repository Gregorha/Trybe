const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (callback1, err) => {
  const didOperationSucceed = Math.random() >= 0.6;
  if (didOperationSucceed) {
    callback1(getMarsTemperature())
  }
  else {
    err("Robot is busy");
  }

  // console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`)
  // return `Mars temperature is: ${getMarsTemperature()} degree Celsius`
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);


// setTimeout(sendMarsTemperature, messageDelay())
sendMarsTemperature(temperatureInFahrenheit, handleError);
// imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError);
 // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
