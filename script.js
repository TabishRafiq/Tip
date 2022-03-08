

// Create function to modify innerHTML
function print() 
{
 var a = document.querySelector('input[name="budget"]:checked').value;
 //Android.Qpay(parseInt(a));
 Android.askConsent("Tip");
 //console.log(a);
}

function confirmed(val)
{
   alert(val);
}
