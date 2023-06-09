import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent {


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





  // closeResult = '';
  // constructor(private modalService: NgbModal) {}

  // open(content) {
	// 	this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
	// 		(result) => {
	// 			this.closeResult = `Closed with: ${result}`;
	// 		},
	// 		(reason) => {
	// 			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	// 		},
	// 	);
	// }

	// private getDismissReason(reason: any): string {
	// 	if (reason === ModalDismissReasons.ESC) {
	// 		return 'by pressing ESC';
	// 	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	// 		return 'by clicking on a backdrop';
	// 	} else {
	// 		return `with: ${reason}`;
	// 	}
	// }
}

