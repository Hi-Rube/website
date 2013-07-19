<?php
  class ModelsAction extends ModelsDrive
  {
  	public function MysqlStart()
  	{
  		$this->start('mysql');
  	}
  	public function connectByConfig()
  	{
  		$data=json_decode(file_get_contents(APPLICATION_PATH.'/configs/config.json'),true);
  		return $this->sql->connectsql($data['sqladdress'], $data['sqlname'], $data['sqlpassword']);
  	}
  	public function connectsqlDirect($sqlName,$username,$password)
  	{
  		return $this->sql->connectsql($sqlName, $username, $password);
  	}
  	public function postOrder($order)
  	{
  	    return $this->sql->sqlorder($order);
  	}
  }