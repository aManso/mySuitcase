import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { User } from '../../../../core/models/user';
import { AdminUserService } from '../../admin-user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  public result: any;
  public usersForm: UntypedFormGroup;

  constructor(
    private _userService: AdminUserService,
    private readonly _changeDetector: ChangeDetectorRef,
    private _fb: UntypedFormBuilder,
  ) {}

  ngOnInit() {
    this.usersForm = this._fb.group({
      userId: null,
    });
  }

  // **************** Just for testing *************
  public getUsers() {
    this._userService.getUsers().subscribe((userList: User[]) => {
      this.result = JSON.stringify(userList);
      this._changeDetector.detectChanges();
    }, (error) => {
      // TODO replace for a info message
      console.error(error);
    });
  }

  public getUser() {
    this._userService.getUser(this.usersForm.controls.userId.value).subscribe((user: User) => {
      this.result = JSON.stringify(user);
      this._changeDetector.detectChanges();
    }, (error) => {
      // TODO replace for a info message
      console.error(error);
    });
  }

  public addUser() {
    this._userService.addUser({
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
    }, (error) => {
      // TODO replace for a info message
      console.error(error);
    });
  }

  public updateUser() {
    this._userService.getUser(this.usersForm.controls.userId.value).subscribe((user: User) => {
      this.result = JSON.stringify(user);
      this._changeDetector.detectChanges();
    }, (error) => {
      // TODO replace for a info message
      console.error(error);
    });
  }

  public deleteUser() {
    this._userService.deleteUser(this.usersForm.controls.userId.value).subscribe((response: any) => {
      this.result = JSON.stringify(response);
      this.getUsers();
    }, (error) => {
      // TODO replace for a info message
      console.error(error);
    });
  }
  // **************** End of methods for testing *************
}
