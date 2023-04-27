import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

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
