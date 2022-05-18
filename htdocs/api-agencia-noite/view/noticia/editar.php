<?php
include '../../control/NoticiaControl.php';
 
$dados = $_POST;

if(!empty($dados)){	
 $noticiaControl = new NoticiaControl();
 $noticiaControl->update($dados, $dados['id']);
 header('Location:listar.php');
}







?>