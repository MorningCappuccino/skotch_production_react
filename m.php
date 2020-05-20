<?php
$data = json_decode(file_get_contents('php://input'), true);
    if ($data["phone"]) {
        $to      = 'info@skotchproduction.by';
        $subject = 'Перезвоните мне!';
        $message = 'Перезвоните мне по номеру:' . $data["phone"] . "\r\n";
        $headers = 'From: info@skotchproduction.by' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        
        mail($to, $subject, $message, $headers);
        
        echo json_encode('Success');
    }
?> 