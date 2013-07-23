<?php
  class indexcontroller extends ControllerAction
  {
  	public function init()
  	{
  		
  	}
  	
  	public function indexAction()
  	{
  		$this->loadView("index");
  		$this->display();
  	}
  }
  