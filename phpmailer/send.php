<?php 
// header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use Exception\Exception\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';


// require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->IsHTML(true);

// $mail->SMTPDebug = 3;                              // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.mail.ru';                   // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'test6331402@inbox.ru';             // Наш логин
$mail->Password = 'rtxopnm1402';                      // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('mail@gmail.com', 'Сайт');             // От кого письмо 
$mail->addAddress('mail@yandex.ru');                  // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$org = $_POST['org'];

$mail->Subject = 'Данные';
$mail->Body    = '
    Пользователь оставил данные <br> <br>
    Имя: ' . $name . ' <br><br>
    Номер телефона: ' . $phone . '<br><br>
    E-mail: ' . $email . '<br><br>
    Org: ' .$org . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>