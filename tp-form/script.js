//Start on submit click

document.getElementById('submit').addEventListener('click', function(event){

//initial function for enable or disable instruction type if user fails
  function enableTool(elem){
	  return elem.nextElementSibling.style.display = 'inline';
  };

  function disableTool(elem){
	  return elem.nextElementSibling.style.display = 'none';
  };

//initial function for check if have number in string
  function checkInt(value){
	 for (var i = 0, len = value.length; i < len; i++) {
  	  	if(value[i] >= 0){
  			return true;
  	  	}
  	 };
   };

//initial function for check if have string in number
  function checkStr(value){
    for (var i = 0, len = value.length; i < len; i++) {
      let checkParse = parseInt(value[i]);
      if(isNaN(checkParse)){
        return true;
      }
    };
  };

// Object stock all function      STARTT
  const fct = {
  // Check Gender Radio
    checkRadio: function(){
      let userRadio = [document.getElementById('sexeM'),document.getElementById('sexeF')];
      userRadio[0].checked || userRadio[1].checked ? disableTool(userRadio[1]) : enableTool(userRadio[1]);
    },

  // Check String input
    checkString: function(id, number, bool){ //bool is true if is possible to insert number in input
      let idAfter = document.getElementById(id);
      let string = idAfter.value;
      let tempBool;
      bool === false ? (
        tempBool = checkInt(string),
	  (idAfter.value.length < number || tempBool === true ? enableTool(idAfter) : disableTool(idAfter))
        ) : (
	  (idAfter.value.length < number ? enableTool(idAfter) : disableTool(idAfter))
	);
      },

  //Check Age
    checkAge: function(){
      let userAge = document.getElementById('age');
      let userPut = userAge.value;
	  let tempBool = checkStr(userPut);
      (userPut <= 5 || userPut >= 141 || tempBool === true) ? enableTool(userAge) : disableTool(userAge);

    },

  //Verify password
    checkPass: function(){
      let userPwd = document.getElementById('mdp');
      let userPwdVerif = document.getElementById('mdpConfirm');
      userPwd.value == userPwdVerif.value ? disableTool(userPwdVerif) : enableTool(userPwdVerif);
    },

  //Check Countrie
    checkCountrie: function(){
      let userCountries = document.getElementById('countries');
      let userCountSelect = userCountries.options[userCountries.selectedIndex].value;
      (userCountSelect == 'Fr' || userCountSelect == 'En') ? disableTool(userCountries) : enableTool(userCountries);
    }

  // End of function object
  };

  fct.checkRadio(); //Gender
  fct.checkString('firstName', 2, false); //FirstName
  fct.checkString('lastName', 2, false); //LastName
  fct.checkAge(); //Age
  fct.checkString('pseudo', 3, true); //Nickname
  fct.checkString('mdp', 6, true); // password
  fct.checkPass(); //verif password
  fct.checkCountrie(); //Countrie
});
