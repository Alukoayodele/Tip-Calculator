document.querySelector('#tip-form').addEventListener('submit', calculateTip);
document.querySelector('.clear-field').addEventListener('click', clearfield);


function calculateTip(e){
  
 let amount = document.getElementById('amount').value;
 let percentage = document.getElementById('percentage').value;
 let numberOfCustomers = document.getElementById('customers').value;
 
 let tip = (percentage / 100) * amount;
 let customerTab = tip / numberOfCustomers;





 if (amount === "" || numberOfCustomers === "") {
 
 errorMessage('Please your numbers')
 
  } else if (amount < 0 || numberOfCustomers < 0) {
  
  errorMessage("amount to be paid or number of customers can't be negative");
   }

else {
    document.querySelector('.total-tips').innerHTML = `Total tip for this service is &#x20A6; ${tip}`;
    document.querySelector(
      ".unit-cost"
    ).innerHTML = `Each customer will pay &#x20A6; ${customerTab}`;

 }







  e.preventDefault();
}





 function errorMessage(error){



  const errorDiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

   errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
 }

 function clearError(){
   document.querySelector('.alert').remove();
 }


 function clearfield(){
  document.getElementById('amount').value = "";
  document.getElementById('percentage').value = "";
  document.getElementById('customers').value = "";
  document.querySelector('.total-tips').innerHTML = "";
  document.querySelector('.unit-cost').innerHTML = "";


  
 
 }


