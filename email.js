function sendEmail(e) {
  e.preventDefault();

  const serviceID = "service_u48x7o7";
  const templateID = "template_zci1a7u";
  const sendBtn = document.getElementById("send-btn");
  sendBtn.innerText = "...";

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      sendBtn.innerText = "Sent";
    })
    .catch((err) => console.log(err));
}
