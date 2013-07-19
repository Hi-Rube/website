<?php
class Sql {
	protected $sql;
	public function __construct($sqlname) {
		if (file_exists(APPLICATION_ENV . '/Sql/' . $sqlname . 'Drive.php')) {
			require_once 'Sql/' . $sqlname . 'Drive.php';
			$obj = $sqlname . 'Drive';
			$this->sql = new $obj ();
		}
	}
	public function getSql() {
		return $this->sql;
	}
	public function connectSql($sqlName, $username, $password) {
		return $this->sql->connectSql ( $sqlName, $username, $password );
	}
	public function sqlorder($order) {
		return $this->sql->sqlorder ( $order );
	}
}