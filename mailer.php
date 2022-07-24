<?php
	 
     
    // Data from the HTML from inputs

     
      $name = strip_tags(trim($_POST["name"]));
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $message = trim($_POST["message"]);
      $phone = trim($_POST["phone"]);
      $company = trim($_POST["company"]);
      $radio = trim($_POST["radio"]);
      $radio1 = trim($_POST["radio1"]);
      $radio2 = trim($_POST["radio2"]);

    // Send the email to


    $recipient = "gyorgynagy1986@gmail.com";


    // Set the email subject.
    $subject = "New contact from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Company: $company\n\n";
    $email_content .= "Message:\n$message\n\n";
    $email_content .= "Visszahívás: 9:00-12:00 $radio\n";
    $email_content .= "Visszahívás: 13:00-15:00 $radio1\n";
    $email_content .= "Visszahívás: 17:00-19:00 $radio2\n";


	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => '6LcohXkdAAAAAOLIK67srlrrcoP51dh6lZAuO4qF',
		'response' => $_POST["g-recaptcha-response"]
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
			'content' => http_build_query($data)
		)
	);

	$context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success=json_decode($verify);

    // Rechapcha validation

	if ($captcha_success->success==false) {
		echo "<p>You are a bot! Go away!</p>";
        exit;
	} else if ($captcha_success->success==true) {

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: https://studiobromo.com/msgsent.php?success=1#form");
	}