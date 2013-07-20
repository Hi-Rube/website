<?php
  class indexcontroller extends ControllerAction
  {
  	public function init()
  	{
  		$this->includeSqlFile('rube');
  		$i=new rube();
  		echo $i->connectByConfig();
  		echo "HIRUBE!";
  	}
  	
  	public function index()
  	{
  		$this->loadView('index');
  		$this->renderArray($variable=array('ok'=>'Rube'));
  		$this->display();
  		
  	}
  	
  	public function e()
  	{
  		$op=$this->getPost('a');
  		echo $op;
  		$pp=$this->getGet('i');
  		echo $pp;
  		$this->loadView('rube');
  		$this->display();
  	}
  	
  }
  