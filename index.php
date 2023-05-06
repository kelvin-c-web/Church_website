<?php
// get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// set email recipient and subject
$to = 'ayooluwasamuel619@gmail.com';
$subject = 'New message from contact form';

// set email headers
$headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";

// send email
mail($to, $subject, $message, $headers);

echo 'Message sent successfully!';
?>
