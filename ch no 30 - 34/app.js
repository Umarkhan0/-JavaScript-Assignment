                        // Q  no  1;

// let renderDate = new Date()
// document.write(renderDate)                        

                        //Q  NO  2;

// let printName = ["Junwary","February","March","April","May","June","July","August","September","October","November","December"];
// let getMonth = new Date().getMonth();
// document.write ("Current Month in "+printName[getMonth]);

                        //Q  NO 3;

// let printName = ["Sunday","Monday","Tusday","Wednesday","Thursday","Friday","Saturday"];
// let getDay = new Date().getDay();
// document.write("Tuday is "+printName[getDay]);

                        //      Q  NO  4;

//  let printName = ["Sunday","Monday","Tusday","Wednesday","Thursday","Friday","Saturday"];
//  let getDay = new Date().getDay();
//  if (getDay === 6 || 0){
//     alert("It's fun day")
//  }else{
//  document.write("Tuday is "+printName[getDay]);
//  }

                        //  Q  NO 5;

// let getDay = new Date().getDate();
// if(getDay <= 15){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month")
// }

                        //  Q  NO  6;

// let date = new  Date()
// let milliSecond = date.getTime()
// let minuts = date.getMinutes(1970, 0, 1)
// document.write(date +"<br>"+ milliSecond+"<br>"+minuts)

                        //  Q  NO 7;

// let date = new Date().getHours();
// if(date <= 12){
//     alert("its  a AM");
// }else{
//     alert("Its's a PM")
// }

                    //  Q  NO 8;

// let laterDate = new Date(2020, 11, 31);
// document.write(laterDate);

                    //  Q NO 9;

// let currentDate = new Date();
// let startingDate = new Date(2015, 2, 18);
// let timeDifference = currentDate - startingDate;
// let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("The number of days passed since 1st Ramadan: " + daysPassed);

                        // Q  NO  10;

// let currentDateSeconds = new Date ();
// let twoThousondFifteenDate = new Date(2015, 11 ,5);
// let final =Math.floor( (currentDateSeconds - twoThousondFifteenDate)/ 1000);
// document.write(final);

                        // Q  NO  11;


// let cruntDate = new Date();
// let crentHours = new Date ().getHours()
// if(crentHours == 22){
//     document.write("1 hourse ago's it was "+cruntDate);
// }else{
//     document.write(cruntDate);
// };

                //  Q  NO  12;

// var newDate = new Date();
// let currentDate = new Date();
// newDate.setFullYear(currentDate.getFullYear() - 100);
// var formedDate = newDate.toDateString();
// alert("100 years back " + formedDate);

                    // Q NO  13;

// let age = prompt("Enter your age") ;
// let cruntDate = new Date().getFullYear();
// let year =  cruntDate - age;
// document.write("Your birdh year is " + year);

                    //  Q  NO  14;

// let unitRupees = 40;
// let userName = "ABC";
// let aryOfMonth = ["junwary","febrary","March","April","May","June"]
// let month = new Date().getMonth();
// let numbersOfUnit = 45;
// let totalValue  = unitRupees * numbersOfUnit;
// let NetAmountPayableWithinDueDate = totalValue;
// let latePaymentSurcharge = 350;
// let latePayment =  totalValue + latePaymentSurcharge;
// let grossAmountPayableAfterDueDate = latePayment;
// document.write("User name: " + userName+"<br /> Month: " + aryOfMonth[month]+"<br />"
//  + "Number of units: " + numbersOfUnit + "<br />Net Amount Payable (within Due Date): " + totalValue
//  + "<br />Late Payment Surcharge: "+ latePaymentSurcharge + "<br />Gross Amount Payable (after Due Date) Where: "+
//  grossAmountPayableAfterDueDate);