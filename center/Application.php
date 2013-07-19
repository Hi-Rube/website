<?php
class Application {
	protected $_environment;
	protected $_operating;
	protected $_applicationini;
	protected $_applicationPath;
	public function __construct($applicationPath, $configsPath) {
		$this->_applicationini = $configsPath;
		$this->_applicationPath = $applicationPath;
		$this->getURLData ();
	}
	public function run() {
		require_once APPLICATION_ENV . '/Application/ControllerDrive.php';
		require_once APPLICATION_ENV . '/Application/ViewDrive.php';
		require_once APPLICATION_ENV . '/Application/ModelsDrive.php';
		require_once APPLICATION_ENV . '/Application/DriveAction/ControllerAction.php';
		require_once APPLICATION_ENV . '/Application/DriveAction/ModelsAction.php';
		$application = new ControllerDrive ();
		$application->start ( $this->_operating ['action'], $this->_operating ['method'] );
	}
	protected function getURLData() {
		$this->_environment ['host'] = $_SERVER ['HTTP_HOST'];
		$path = explode ( '?', $_SERVER ['REQUEST_URI'] );
		$this->_environment ['path'] = $path [0];
		$operate = explode ( '/', $this->_environment ['path'] );
		if (strcmp($operate[count ( $operate )-3], "index.php")==0) {
			$this->_operating ['action'] = $operate [count ( $operate ) - 2];
			$this->_operating ['method'] = $operate [count ( $operate ) - 1];
		} else {
			$this->_operating ['action'] = $operate [count ( $operate ) - 1];
			$this->_operating ['method'] = "index";
		}
	}
}