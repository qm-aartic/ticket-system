{/* <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "6sWoVJwPyHfozi86y",
      });
   })();
</script> */}

// $ npm install --save @emailjs/browser

function send_email(user_name, type, result, email){
    const serviceId='service_u2bvn5q';
    const templateId='template_wv0j7d8';
    const publicKey='6sWoVJwPyHfozi86y';

    emailjs.init(publicKey)

    let parms = {
        to_name : user_name,
        ticket_type : type,
        ticket_result: result,
        user_email: email,
    }
    emailjs.send(serviceId, templateId, parms);
}