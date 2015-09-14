var typeInput = document.getElementById('t-type');
var intInput = 11;
var enjInput = 11;
var lenInput = document.getElementById('t-length');
var noteInput = document.getElementById('t-notes');
var injInput = document.getElementById('t-injuries');
var goalInput = document.getElementById('t-goals'); document.querySelector('form.train-form').addEventListener('submit', function(e) {
//document takes html doc in.

e.preventDefault();
function getRadioValue(groupName, groupVal) {
          var valRet = 0;
          var radios = document.getElementsByName(groupName);
          for (var i = 0; i < radios.length; i++) { 
      if (radios[i].checked) {
          groupVal = i;
          break;
      }

  }
  return groupVal;
};
intInput = (getRadioValue("t-i", intInput)+1);
enjInput = (getRadioValue("t-e", enjInput)+1);

console.log("{Type: "+typeInput.value+"}");
console.log("{Intensity: "+intInput+"}");
console.log("{Enjoyment: "+enjInput+"}");
console.log("{Length: "+lenInput.value+"}"); console.log("{Notes: "+noteInput.value+"}"); console.log("{Injuries: "+injInput.value+"}"); console.log("{Goals: "+goalInput.value+"}")});</script>
</body>
