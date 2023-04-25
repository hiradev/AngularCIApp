<?php

namespace App\Controllers;
// defined('BASEPATH') OR exit('No direct script access allowed');
use App\Models\FormModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

class Home extends BaseController
{
  public function index()
  {
    $model = new FormModel();
    $data['intake'] = $model->findAll();
    //print_r(json_encode($data));
    //die();
    if($data){
      return json_encode($data);
    } else {
      print_r('No data');
    }

  }

    /**
     * Create a new Intake
     */

  public function create()
  {
    $model = new FormModel();
    $data = [
      'batch_code' => $this->request->getVar('batch_code'),
      'program_code' => $this->request->getVar('program_code'),
      'code' => $this->request->getVar('code'),
      'name' => $this->request->getVar('name'),
      'status' => $this->request->getVar('status')
    ];
    // die();
    $model->insert($data);

    $response = [
      'status'   => 201,
      'error'    => null,
      'messages' => [
          'success' => 'Intake created successfully'
      ]
    ];
    return $this->response->setJSON($response); //response->setJSON==respondCreated
  }

    /**
     * Get a single class by id
     */
    public function show($id = null)
    {
      $model = new FormModel();
      $data = $model->getWhere(['id' => $id])->getResult();
      // print_r(json_encode($data));
      // die();
      if($data){
        return $this->response->setJSON($data);
      }else{
        return $this->failNotFound('No intake found');
      }
    }


      // update
      public function update($id = null)
      {
        $model = new FormModel();
        $id = $this->request->getVar('id');
        $data = [
            'code' => $this->request->getVar('code'),
            'name' => $this->request->getVar('name'),
            'status'  => $this->request->getVar('status')
        ];
        print_r(json_encode($data));
        $model->update($id, $data);
        // die();
        $response = [
          'status'   => 200,
          'error'    => null,
          'messages' => [
              'success' => 'Employee updated successfully'
          ]
      ];
      return $this->response->setJSON($response);
    }



    // delete
    public function delete($id = null){
        $model = new FormModel();
        $data = $model->where('id', $id)->delete($id);
        if($data){
            $model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Employee successfully deleted'
                ]
            ];
            return $this->response->setJSON($response);
        }else{
            return $this->failNotFound('No employee found');
        }
    }

}
