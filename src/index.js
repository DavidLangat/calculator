 function solve() {
        // this function is for doing the arithmetic calculation when the "=" key is pressed.//okay//next line//
        let a = document.getElementById("dis").value; // in this line we let a to pick the value entered in "dis" id on our html//is this understood//so the value at the end is so that is can display the actual value?//yes when you use Value keywork . its means that that value will be assigned to specified id in html//ooh okay next line//okay
        let b = eval(a); // in this line, the keyword eval checks the value in a and see if theres any arithmetic symbol, if yes. it does the calculation depending on the symbol//Oooh i have understood//okay lets proceed to the next line//okay
        document.getElementById("dis").value = b; // this is the result it print values in b to the elementID dis//Okay that is clear//okay lets proceed to the next line
      }
      function disp(val) {
        // this displays thevalue in every element with the function disp in our html code to the dis id//ooh so that the values can be visible in the  calc?/yeah//lemme explain more on the next line//okay
        document.getElementById("dis").value += val; //now the symbol "+= val" picks the valur from every button called to this function and "+=" is used so that if more than one button is pressed the values in dis will not be overwritten//ooh and how have this functions been called?so that they can work//in every button theres a function "onclick="disp()""//i guess nimepata your point sikuwa nimeona hapoo kwa buttons//okay hope its now clear////🙂//okay lets proceed😀
      } // clr imekubali kuwork already//you mean calc ishaanza kufunction// not yet what's working ryna ni ya clear//ooh nimeona// okayy lets work on solve.//sawasawa let me do some research first// okay// ishakubali kufanya .. i had written val instade of value//the calc ama //hiyo function //ya solooveh //by the way its working  and i dont even know what happenned lol// lemme expain//yes please lets start from the fast line of js.. follow me

      function clr() {
        //this function is to clear values entered in "dis "< id
        document.getElementById("dis").value = "";
      }
