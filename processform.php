<?php
if (isset($_POST['submit'])) {
    $to = 'imkayat7@gmail.com'; // Replace with your email address
    $subject = 'New Contact Form Submission';
    $name = $_POST['firstName'];
    $name = $_POST['lastName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mailSuccess = mail($to, $subject, $message, $headers);

    if ($mailSuccess) {
        echo "Thank you for your submission!";
    } else {
        echo "Error sending the email. Please try again later.";
    }
}
?>
