<?php
class ModelsDrive {
   protected $sql;
   public function start($name)
   { 
   	require_once APPLICATION_ENV.'\Sql.php';
   	$this->sql=new Sql($name);
   }
   
   public function connectsql($sqlName,$username,$password)
   {
   	$this->sql->connectSql($sqlName, $username, $password);
   }
   public function sqlorder($order) {
   	return $this->sql->sqlorder ( $order );
   }
}
