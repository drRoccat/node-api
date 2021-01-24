import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProjectService} from '../shared/services/project.service';
import {Project} from '../shared/models/project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isPrintCat = false;
  isPrintEv = false;
  sub1: Subscription;
  pros: Project[];
  proName;
  proId;
  printName;
  qwe = {
    name: 'All',
    value: 'undefined'
  };

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {

    this.sub1 = this.projectService.getProjects().subscribe(projects => this.pros = projects);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  set(): void {
    this.printName = this.secondFormGroup.value.secondCtrl;

    if (this.firstFormGroup.value.firstCtrl === 'undefined') {
      this.proId = undefined;
      this.isPrintEv = true;
    } else {
      const project = this.pros.find(x => x._id === this.firstFormGroup.value.firstCtrl);
      this.proName = project.name;
      this.proId = this.firstFormGroup.value.firstCtrl;
      this.isPrintCat = true;
      this.isPrintEv = true;
    }
  }

  public onRefresh(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/system', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/system/report']);
      });
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
