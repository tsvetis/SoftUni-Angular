import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersService],
})
export class UsersComponent implements OnInit, OnChanges {
  @Input() users: { name: string }[] = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    public userService: UsersService
  ) {
    this.cdRef.detach();
  }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    console.log(this.users);
    if (this.users?.length > 4) {
      this.cdRef.detectChanges();
    }
  }
}
