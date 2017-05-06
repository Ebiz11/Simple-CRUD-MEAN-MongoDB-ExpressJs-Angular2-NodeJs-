import { Component, OnInit } from '@angular/core';
import { NinjasService } from './ninjas.service';

@Component({
  selector: 'app-ninjas',
  templateUrl: './ninjas.component.html',
  styleUrls: ['./ninjas.component.css'],
  providers: [NinjasService]
})

export class NinjasComponent implements OnInit {

  constructor(
    private NinjasService: NinjasService,
  ) { }

  private ninjas : any [];
  private ninjasId : any [];
  private addForm : boolean = true;
  private editForm : boolean = false;

  ngOnInit() {
    this.getNinjas();
  }

  createNinjas(rank: HTMLInputElement, name: HTMLInputElement){
    let data = {
      name: name.value,
      rank: rank.value
    };

    this.NinjasService.createNinjas(data).subscribe(
      (data) => {
        name.value = '';
        rank.value = '';
        this.getNinjas();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getNinjas(){
    this.NinjasService.getNinjas().subscribe(
      (data) => {
        this.ninjas = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getNinjasId(id){
    this.NinjasService.getNinjasId(id).subscribe(
      (data) => {
        this.editForm = true;
        this.addForm = false;
        this.ninjasId = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  cancelUpdate(){
    this.editForm = false;
    this.addForm = true;
  }

  updateNinjas(id: HTMLInputElement, rank : HTMLInputElement, name : HTMLInputElement){
    let data = {
      name : name.value,
      rank : rank.value
    };

    this.NinjasService.updateNinjasId(id.value, data).subscribe(
      (data) => {
        name.value = '';
        rank.value = '';
        this.getNinjas();
        this.cancelUpdate();
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteNinjas(id){
    let conf = confirm("Delete Ninjas?");

    if(conf){
      this.NinjasService.deleteNinjas(id).subscribe(
        (data) => {
          this.getNinjas();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

}
