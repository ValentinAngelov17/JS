function calculateBmi(name, age, weight, heightCm) {
    const heightInM = heightCm / 100;
    const bmi = Math.round(weight / heightInM ** 2);

    const output = {
        name,
        personalInfo: {
            age,
            weight,
            height: heightCm,
            BMI: bmi
        }

    };
   
    let status = '';
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight'
    } else {
        status = 'obese';
        output.recommendation = 'admission required';
    }
    output['status'] = status
    return output



}

console.log(calculateBmi('Peter', 29, 75, 182));