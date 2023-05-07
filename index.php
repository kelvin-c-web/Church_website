<?php

// Check if form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Collect form data
    $title = test_input($_POST["title"]);
    $fullname = test_input($_POST["fullname"]);
    $phonenumber = test_input($_POST["phonenumber"]);
    $subject = test_input($_POST["subject"]);
    $infoname = test_input($_POST["infoname"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);


  // Set recipient email address
    $to = 'ayooluwasamuel619@gmail.com';
    $subject = 'New message from Church website';

  // Set email headers
    $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

  // Send email
    mail($to, $subject, $message, $headers);

  // Redirect to thank-you page
    echo 'Message sent successfully thank you!';
exit;
}

// Function to sanitize input data
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
return $data;
    }

?>
