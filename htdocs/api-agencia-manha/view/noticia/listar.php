<?php
include '../../control/NoticiaControl.php';
$noticiaControl = new NoticiaControl();

header('Content-Type: application/json');

echo "[";
$dados = $noticiaControl->findAll();
for($i = 0; $i < count($dados); $i++){
	echo json_encode($dados[$i]);
	if ($i != count($dados)-1)
		echo ",";
}
echo "]";


?>