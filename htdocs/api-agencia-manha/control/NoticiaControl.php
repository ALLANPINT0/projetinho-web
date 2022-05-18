<?php
include '../../model/Noticia.php';

class NoticiaControl{
	function insert($dados){
		$noticia = new Noticia();
		return $noticia->insert($dados);
		header('Location:listar.php');
	}

	function update($dados, $id){
		$noticia = new Noticia();
		return $noticia->update($dados, $id);
	}

	function delete($id){
		$noticia = new Noticia();
		return $noticia->delete($id);
	}

	function find($id = null){

	}

	function findAll(){
		$noticia = new Noticia();
		return $noticia->findAll();
	}
}

?>