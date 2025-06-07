 //email sender____---------------------------------------------------

  function sendEmail(){
    const templateParams = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,

    } ;
    emailjs
    emailjs.sendForm('service_doxrcrl', 'template_7s11hmp', this);
    emailjs.send("service_doxrcrl", "template_7s11hmp", templateParams).then(
      () => 
      alert("Email sent successfully!").catch(()=>alert("Email not send"))
    );

    
    
  }

  
   