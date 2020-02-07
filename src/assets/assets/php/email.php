<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $data = json_decode($json);

        switch($data->sendMailTo) {
            case 0 :
                $to = "community.manager@univafu.edu.mx";
                $for = 'UNIVAFU Universidad';
                break;
            case 1 :
                $to = "iiu@univafu.edu.mx, community.manager@univafu.edu.mx";
                $for = 'Instituto de Idiomas UNIVAFU';
                break;
            case 2 :
                $to = "fundacionunivafu@univafu.edu.mx, community.manager@univafu.edu.mx";
                $for = 'Fundación UNIVAFU';
                break;
            case 3 :
                $to = "inst.rehabilitacion@univafu.edu.mx, community.manager@univafu.edu.mx";
                $for = 'IRIDH UNIVAFU';
                break;
            // case 4 :
            //     $to = "community.manager@univafu.edu.mx";
            //     break;
            default :
                $to = "community.manager@univafu.edu.mx";
        }

        $subject = "Hola mi nombre es: " . $data->nombre;
        $msg = "nombre: " . $data->nombre . "\ntelefono: " . $data->telefono . "\nemail: " . $data->email .
                "\nmensaje: " . $data->mensaje .
                "\nEnviado para: " . $for;
        $msg = wordwrap($msg, 70, "\r\n");

        // echo $msg;

        echo mail($to, $subject, $msg);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}