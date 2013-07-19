<?php
   class Application
   {
   	protected $_environment;
   	protected $_operating;
   	protected $_applicationini;
   	protected $_applicationPath;
   	
   	  public function __construct($applicationPath,$configsPath)
   	  {
   	  	 $this->_applicationini=$configsPath;
   	  	 $this->_applicationPath=$applicationPath;  	
   	  	 $this->getURLData();  	
   	  }
   	  
   	  public function run()
   	  {   	  	
   	    require_once 'Application/ControllerDrive.php';
   	    require_once 'Application/ViewDrive.php';
   	    require_once 'Application/ModelsDrive.php';
   	    require_once 'Application/DriveAction/ControllerAction.php';
   	    require_once 'Application/DriveAction/ModelsAction.php';
   	    $application=new ControllerDrive();
   	    $application->start($this->_operating['action'], $this->_operating['method']); 
   	  }
   	  
   	  protected function getURLData()
   	  { 	  	
   	  	$this->_environment['host']=$_SERVER['HTTP_HOST'];
   	  	$this->_environment['path']=$_SERVER['PHP_SELF'];
   	  	$operate=explode('/', $this->_environment['path']);
   	  	if (strcmp($operate[count($operate)-2],"index.php")) 
   	  	   {
   	  		 $this->_operating['action']=$operate[count($operate)-2];
   	  	   	 $this->_operating['method']=$operate[count($operate)-1];
   	  	   }
   	  			else {
   	  				  $this->_operating['action']=$operate[count($operate)-1];
   	  				  $this->_operating['method']="index";
   	  			     }	
   	  }
   	  
   }