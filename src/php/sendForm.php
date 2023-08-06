<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = $email;
  $subject = "[PORTFOLIO] - New message";
  $body = '<!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
        body{
          --primary-color: #EAE3D7;
          --secondary-color: #090909;
          font-family: Space Grotesk, sans-serif;
          background-color: var(--secondary-color);
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
        }
        h1{
          font-size: 3rem;
          text-align: center;
        }
        h2{
          font-size: 2rem;
        }
        ul{
          list-style: inside;
          font-size: 1.2rem;
        }
        p{
          font-size: 1.2rem;
          line-height: 1.5;
        }
      </style>
    </head>
    <body>
      <h1>NEW MESSAGE</h1>
      <h2>INFOS</h2>
      <ul>
        <li>Name : '.$name.'</li>
        <li>Email : '.$email.'</li>
      </ul>
      <h2>MESSAGE</h2>
      <p>'.$message.'</p>
    </body>
  </html>';

  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=utf-8';
  $headers[] = 'From: PORTFOLIO <portfolio@axelmarcial.com>';
  $headers[] = 'Reply-To: '.$name.'<'.$email.'>';

  mail($to, $subject, $body, $headers);
  echo '{"state":"sent"}';
} else echo '{"state":"error"}';