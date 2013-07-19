<?php
class MysqlDrive {
	protected $link;
	public function connectSql($sqlName, $username, $password) {
		$this->link = mysql_connect ( $sqlName, $username, $password );
		if (! $this->link)
			return 'Could not connect: ' . mysql_error ();
		else
			return 'Connect successful';
	}
	public function sqlorder($order) {
		if (! mysql_query ( $order, $this->link ))
			return "Could not do order.";
		else
			return "Do order ok";
	}
}