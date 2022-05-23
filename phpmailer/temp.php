<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$org = $_POST['org'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<span>Имя:</span> $name<br>
<span>Организация:</span>$org = $_POST['org'];
<span>Телефон:</span>$phone = $_POST['phone'];
<span>Почта:</span> $email<br><br>
<span>Сообщение:</span><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host = 'ssl://smtp.mail.ru';
    $mail->Port = 465;
    $mail->Username = 'test6331402@inbox.ru';
    $mail->Password = 'rtxiopbnm1402';
    $mail->SMTPSecure = 'ssl';
    $mail->setFrom('mail@mail', 'Имя отправителя'); // Адрес самой почты и имя отправителя

