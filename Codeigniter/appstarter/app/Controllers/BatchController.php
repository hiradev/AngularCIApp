<?php

namespace App\Controllers;
// defined('BASEPATH') OR exit('No direct script access allowed');
use App\Models\BatchModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

class BatchController extends BaseController
{
  public function index()
  {
    $model = new BatchModel();
    $data['batch'] = $model->findAll();
    if($data['batch']){
      return json_encode($data['batch']);
    } else {
      print_r('No data');
    }

  }

    /**
     * Create a new Intake
     */

  public function create()
  {
    $model = new BatchModel();
    $data = [
      'code' => $this->request->getVar('code'),
      'name' => $this->request->getVar('name'),
      'status' => $this->request->getVar('status'),
      'intake_code' => $this->request->getVar('intake_code'),
    ];
    // die();
    $model->insert($data);

    $response = [
      'status'   => 201,
      'error'    => null,
      'messages' => [
          'success' => 'Batch created successfully'
      ]
    ];
    return $this->response->setJSON($response); //response->setJSON==respondCreated
  }

}
