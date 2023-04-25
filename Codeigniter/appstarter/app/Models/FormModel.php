<?php

namespace App\Models;
use CodeIgniter\Model;

// defined('BASEPATH') OR exit('No direct script access allowed in FormModel');

class FormModel extends Model {
  protected $table                = 'intake';
  protected $primaryKey           = 'id';
  protected $allowedFields        = ['batch_code','program_code','code','name', 'status'];
  protected $db;

  public function _construct(){
    $db = \Config\Database::connect();
  }
}
