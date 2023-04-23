<?php

namespace App\Models;
use CodeIgniter\Model;

defined('BASEPATH') OR exit('No direct script access allowed');

class FormModel extends Model {
  protected $table                = 'intake';
  protected $primaryKey           = 'id';
  protected $allowedFields        = ['code','name', 'status'];
  protected $db;

  public function _construct(){
    $db = \Config\Database::connect();
  }
}
