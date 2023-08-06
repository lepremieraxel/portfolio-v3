<?php

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content, true);

  if(!is_array($decoded)) {
    echo '{"state":"not_decoded"}';
  } else {
    $name = $decoded['name'];
    $email = $decoded['email'];
    $message = $decoded['message'];
    echo '{"state":"mail_sent"}';
  }
} else echo '{"state":"content_type"}';