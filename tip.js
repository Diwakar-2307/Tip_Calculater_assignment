       function tip_perPerson()
       {
            // by clicking calculate button  this function start its execution
            //take input bill as integer and float both.
         
         
            var Bill = parseFloat(document.getElementById('billamount').value);
         
         
            //take input tip percentage can be  float and int type as per use
            
            //Note:- 
            // 1. if percentage is in decimal then it will round of the value.
         
            var tip= parseFloat(document.getElementById('tip_per').value);
         
         
            //round off percentage
      
            var tip_val = Math.round(tip);
         
         
            //take input people of int type.
         //note:-
         //2. if people is in decimal then it  will round the value.
         
         
         var people=parseFloat(document.getElementById('person').value);
         
         
         //round off people bcz people canot be negative
         
         var count_people_value = Math.round(people);

            // if block description.
               //1. if bill is +ve  and it is greater or equal to 1 then it work else for 0.011 it cant work.
               // 2. tip is +ve or zero.
               // 3. people  is +ve 
               // then if block execute.
               
               
            if((Bill>=1 && tip>=0) && people >=1 )
            {
                  var tip_amount=(Bill*tip_val)/100;
                  var tipPerPerson=(tip_amount/count_people_value).toFixed(2);
                  var tipTotal=((Bill+tip_amount)/count_people_value).toFixed(2);

                  document.getElementById('tip_perP').value =tipPerPerson;
                  document.getElementById('total_perP').value =tipTotal;
                  document.getElementById('person').value = people;
                  document.getElementById('tip_per').value = tip;
            }


               // else block description.
               // 1. if bill is -ve or zero 
               // 2. tip is -ve
               // 3. people  is -ve or in decimal 
               //for any of these condition happen then else block will
               //run and show a pop up mssg to provide correct input


            else
            {
               alert("Please provide valid input");
               return;
            }

       }
    