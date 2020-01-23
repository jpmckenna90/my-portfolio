<?php
  $firstname = $_POST["firstname"];
  $lastname = $_POST["lastname"];
  $visitor_email = $_POST["emailaddress"];
  $message = $_POST["message"];


  $from = 'jpmckenna90@gmail.com';
  $email_subject = "New Email from Portfolio";
  $email_body = "New message from $firstname $lastname. \n $message";

  $to = 'jpmckenna90@gmail.com';

  mail($to,$from,$email_subject,$email_body);
  <script type="text/javascript">
window.location = "index.html";
</script>  
?>