<?php
class buycontroller extends ControllerAction
{
	public function init()
	{

	}
	 
	public function indexAction()
	{
		$this->loadView("msgpage");
		$this->display();
		session_start();
		header("content-type:text/html; charset=utf-8");
		$p=json_decode($_SESSION['msg'],true);
		var_dump($p);
	}
}
