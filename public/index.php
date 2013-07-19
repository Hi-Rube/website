<?php
require_once '../center/Application.php';
defined ( 'APPLICATION_PATH' ) || define ( 'APPLICATION_PATH', realpath ( dirname ( __FILE__ ) . '/../application' ) );
defined ( 'APPLICATION_ENV' ) || define ( 'APPLICATION_ENV', realpath ( dirname ( __FILE__ ) . '/../center' ) );

$o = new Application ( "12", "12" );
$o->run ();

/*require_once '../center/Sql.php';
$m = new Sql ( 'Mysql' );
echo $m->connectSql ( 'localhost', 'root', '' );
echo "<br/>";*/


 