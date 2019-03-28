import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MeasuresService } from '../measures.service';
import { Identifiers } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { catchError } from 'rxjs/operators';
import { HttpErrorInterceptorService } from '../http-error-interceptor.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
// tslint:disable-next-line: no-inferrable-types
  loading: boolean = false;
   detailsFrm: FormGroup;
  // detailsFrm = new FormGroup({
  //   'flow' : new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
  //   'pressure' : new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)])
  // });
  constructor(private router: Router, private fb: FormBuilder, private msv: MeasuresService) {
    this.detailsFrm = this.fb.group({
      Id: [''],
      timestamp: [''],
      flow: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      pressure: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]]
    });
  }
  ngOnInit() {
  }
    addMeasure(flow: Number, pressure: Number) {
      const dateobj = new Date();
      const self = this;
      if (this.detailsFrm.valid) {
        this.loading = true;
     this.msv.addMeasure( dateobj.toLocaleString(), flow, pressure).subscribe(() => {
       // this.successMessage = 'Succesfully Saved';
     setTimeout(() => {self.router.navigate(['table-display']); } , 1500);
// tslint:disable-next-line: no-shadowed-variable
     }, error => {
       console.log(error);
     });
    }
    }
  }
//   onSaveSubmit() {
//     if (this.detailsFrm.valid) {
//       this.router.navigate(['chart-display']);
//     }
//   }
