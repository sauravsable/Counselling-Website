const firebaseConfig = {
    apiKey: "AIzaSyDABgCgyWORZxCr4sCtDak6pbArqtFV0bM",
    authDomain: "fir-71fff.firebaseapp.com",
    databaseURL: "https://fir-71fff-default-rtdb.firebaseio.com",
    projectId: "fir-71fff",
    storageBucket: "fir-71fff.appspot.com",
    messagingSenderId: "655328418122",
    appId: "1:655328418122:web:e79669956350c880e749b3",
    measurementId: "G-VTYXM9M79T"
  };
 
  firebase.initializeApp(firebaseConfig);

  var paymentdata =firebase.database().ref("user");

  document.getElementById("paymentForm").addEventListener("submit",setdata);
    
  function setdata(){
    var name=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var address=document.getElementById("address").value;
    var city=document.getElementById("city").value;
    var date=document.getElementById("date").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
    console.log(name,mobile,email,address,city,date,month,year);
    
    saveMessages(name,mobile,email,address,city,date,month,year);
    
}

   
    const saveMessages = (name,mobile,email,address,city,date,month,year) =>{
    var newpaymentdata = paymentdata.push();
     newpaymentdata.set({
      Name : name,
      Number : mobile,
      Email : email,
      Address:address,
      City:city,
    });
};
function Clear(){
    alert("form fill successfully");
    location.reload();
}





