<?php
include '../../control/NoticiaControl.php';
 
$dados = $_POST;

if(!empty($dados)){	
 $noticiaControl = new NoticiaControl();
 $noticiaControl->delete($dados['id']);
 header('Location:listar.php');
}







?>