<?php

namespace App\Controllers;
// defined('BASEPATH') OR exit('No direct script access allowed');
use App\Models\FormModel;

class Home extends BaseController
{
  public function index()
  {
    $model = new FormModel();
    $data['intake'] = $model->findAll();
    return $this->respond($data);
    // return view('welcome_message');
  }

    /**
     * Create a new Intake
     */

  public function create()
  {
    $model = new FormModel();
    $data = [
      'code' => $this->request->getVar('code'),
      'name' => $this->request->getVar('name'),
      'status' => $this->request->getText('status')
    ];

    $model->insert($data);

    $response = [
      'status'   => 201,
      'error'    => null,
      'messages' => [
          'success' => 'Intake created successfully'
      ]
    ];
    return $this->respondCreated($response);
  }

    /**
     * Get a single class by id
     */
    public function show($id)
    {
      $model = new FormModel();
      $data = $model->getWhere(['id' => $id])->getResult();
      if($data){
        return $this->respond($data);
      }else{
        return $this->failNotFound('No intake found');
      }
    }

}
