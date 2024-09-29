<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check that the data is valid
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Invalid data, redirect back to form
        header("Location: contact.html?error=invalidinput");
        exit;
    }

    // Recipient email address
    $recipient = "bossmandosky@gmail.com"; // Replace with your email address

    // Email subject
    $subject = "New Contact Form Message from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Email sent successfully, redirect to success page
        header("Location: contact.html?success=1");
    } else {
        // Email sending failed, redirect back to form with error
        header("Location: contact.html?error=sendfail");
    }
} else {
    // If form is not submitted, redirect back to the form
    header("Location: contact.html");
}
?>
