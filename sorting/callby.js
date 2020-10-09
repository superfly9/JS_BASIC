
 function changeReference(obj) {
    obj =  {seoul:'Lite'}
  }
  const o2 = { seoul: 1 }
  changeReference(o2)
  console.log(o2) // {seoul: '1'}




var a = {};
var func = function(b) {
  b = (b.seoul=1);
  b.b = 2;
}
func(a);
console.log(a); // ??