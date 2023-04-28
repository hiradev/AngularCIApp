<?php

namespace App\Models;
use CodeIgniter\Model;

// defined('BASEPATH') OR exit('No direct script access allowed in FormModel');

class BatchModel extends Model {
  protected $table                = 'batch';
  protected $primaryKey           = 'id';
  protected $allowedFields        = ['code','name', 'status','intake_code'];
  protected $db;

  public function _construct(){
    $db = \Config\Database::connect();
  }
}
