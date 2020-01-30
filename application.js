// muutuja sisestava raha suuruse hoiustamiseks
let amount_inserted = document.getElementById('amount')
// muutuja + nupu vajutuseks
let income_submit_button = document.querySelector('#income_submit')
// muutuja hoidmaks kohta kuhu sissetulek kuvatakse
let income_view= document.getElementById('income_view')

function showIncomeAmount(event){
    console.log("Testimise jaoks ütlen: raha lisati")
    income_view.innerHTML= amount_inserted.value 
}

income_submit_button.addEventListener('click', showIncomeAmount)