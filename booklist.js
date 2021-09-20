const Food_Item=document.querySelector('#Food_Item');
const Customer_Name=document.querySelector('#Customer_Name'); 
const Quantity=document.querySelector('#Quantity');  
const Delivery_Date=document.querySelector('#Delivery_Date');
const btn=document.querySelector('.btn');    
const Food_List=document.querySelector('#Food_List'); 

btn.addEventListener('click',function(e) {
e.preventDefault();       

if(Food_Item.value =='' && Customer_Name.value =='' && Quantity.value == '' && Delivery_Date.value =='')
{
  alert('Please input valid info');

}

else{

  const newRow = document.createElement('tr');


const newFood = document.createElement('td');
newFood.innerHTML= Food_Item.value;
newRow.appendChild(newFood);



const newCustomer_Name = document.createElement('td');
newCustomer_Name.innerHTML =Customer_Name.value;
newRow.appendChild(newCustomer_Name);


const newQuantity=document.createElement('td');
newQuantity.innerHTML=Quantity.value;
newRow.appendChild(newQuantity);


const newDelivery_Date=document.createElement('td');
newDelivery_Date.innerHTML=Delivery_Date.value;
newRow.appendChild(newDelivery_Date);
Food_List.appendChild(newRow);
}
});