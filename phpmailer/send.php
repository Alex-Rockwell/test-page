<?php 
// header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use Exception\Exception\Exception;
use SMTP\SMTP\SMTP;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';


// require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
// $mail->IsHTML(true);

// $mail->SMTPDebug = 3;                              // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'test2205271@mail.ru';              // Наш логин
$mail->Password = '36r0g64A8SiW08sGczHd';             // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('test2205271@mail.ru', 'Сайт');        // От кого письмо 
$mail->addAddress('test2205271@mail.ru');             // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML


// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $email = $_POST['email'];
// $org = $_POST['org'];

$mail->Subject = 'Данные';
$mail->Body    = 'Данные';
// $mail->Body    = '
//     Пользователь оставил данные <br> <br>
//     Имя: ' . $name . ' <br><br>
//     Номер телефона: ' . $phone . '<br><br>
//     E-mail: ' . $email . '<br><br>
//     Org: ' .$org . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>