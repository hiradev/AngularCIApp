import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-modal',
  templateUrl: './batch-modal.component.html',
  styleUrls: ['./batch-modal.component.css']
})
export class BatchModalComponent {
  openModal(){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display = 'block';
      modelDiv.style.backdropFilter = 'blur(10px)';
    }
  }

  closeModal(){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display = 'none';
    }
  }
}
