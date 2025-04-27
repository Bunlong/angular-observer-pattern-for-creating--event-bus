import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileService } from './../../services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  name$ = this.profileService.name$;

  constructor(private profileService: ProfileService) {}

  save(name: string) {
    this.profileService.saveName(name);
  }
}
