<?php
class productcontroller extends ControllerAction
{
	public function init()
	{

	}
	 
	public function indexAction()
	{
		$this->loadView("product");
		$this->display(); 
	}
	
	public function setMsgAction()
	{
		if ($_POST["method"]=="")
		{
		  die();
		}
		session_start();
		$_SESSION["msg"]=$_POST["method"];
		echo '{"msg":"ok"}'; 
	}
}
