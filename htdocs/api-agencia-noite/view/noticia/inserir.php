<?php
include '../../control/NoticiaControl.php';
 
$dados = $_POST;
// print_r($dados);
// echo $dados['titulo'];
// exit;

if(!empty($dados)){	
 $noticiaControl = new NoticiaControl();
 $noticiaControl->insert($dados);
 header('Location:listar.php');
}

?>