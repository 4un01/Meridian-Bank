const form = document.querySelector('.form');

function mortgageCalc(e){

    e.preventDefault();
    let amountR = document.getElementById('loanAmount');
    let interestR = document.getElementById('interest');
    let yearsR = document.getElementById('years');

    let amount = parseFloat(amountR.value);
    let interest = parseFloat(interestR.value);
    let years = parseFloat(yearsR.value);

    monthlyInterest = (interest / 100) / 12;
    payments = years * 12;

    monthlyPayment = (amount * monthlyInterest * ((1 + monthlyInterest) ** payments) ) 
                     / 
                     ( ((1 + monthlyInterest) ** payments) - 1);

    monthlyPayment = monthlyPayment.toFixed(2);

    let mortgageResultTitle = document.createElement('h2');
    mortgageResultTitle.innerHTML = `Your mortgage works out to: £${monthlyPayment} per month`;
    document.getElementById('mortgageResult').appendChild(mortgageResultTitle);


}

form.addEventListener('submit', mortgageCalc);