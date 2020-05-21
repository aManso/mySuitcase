import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { User } from '../../../../core/models/user';
import { LoginService } from '../../../../core/shared/login/login.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  public result: any;
  public usersForm: FormGroup;

  constructor(
    private _loginService: LoginService,
    private readonly _changeDetector: ChangeDetectorRef,
    private _fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.usersForm = this._fb.group({
      userId: null,
    });
  }

  // TODO just for testing
  public getUsers() {
    this._loginService.getUsers().subscribe((userList: User[]) => {
      this.result = JSON.stringify(userList);
      this._changeDetector.detectChanges();
    })
  }

  public getUser() {
    this._loginService.getUser(this.usersForm.controls.userId.value).subscribe((user: User) => {
      this.result = JSON.stringify(user);
      this._changeDetector.detectChanges();
    })
  }

  public addUser() {
    this._loginService.addUser({
      address: {
        country: undefined,
        city: undefined,
        street: undefined,
        number: undefined,
        postCode: undefined,
        coordinates: undefined,
      },
      admin: false,
      age: 20,
      email: 'paco@paco.com',
      joiningDate: new Date(),
      name: 'paco',
      password: '1234',
    }).subscribe((user: User) => {
      this.result = user;
      this._changeDetector.detectChanges();
    })
  }

  public updateUser() {
    this._loginService.getUser(this.usersForm.controls.userId.value).subscribe((user: User) => {
      this.result = JSON.stringify(user);
      this._changeDetector.detectChanges();
    })
  }

  public deleteUser() {
    this._loginService.deleteUser(this.usersForm.controls.userId.value).subscribe((response: any) => {
      this.result = JSON.stringify(response);
      this.getUsers();
    })
  }
}
