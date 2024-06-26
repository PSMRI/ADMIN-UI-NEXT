/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { ConfirmationDialogsService } from '../../services/dialog/confirmation.service';

@Component({
  selector: 'app-view-version-details',
  templateUrl: './view-version-details.component.html',
  styleUrls: ['./view-version-details.component.css'],
})
export class ViewVersionDetailsComponent implements OnInit {
  version_UI: any;
  commitID_UI: any;
  version_api: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public input: any,
    public dialogRef: MatDialogRef<ViewVersionDetailsComponent>,
    private confirmationDialogsService: ConfirmationDialogsService,
  ) {}

  ngOnInit() {
    console.log('input', this.input);
  }
  uiVersionDetails(versionDetails: any) {
    this.version_UI = versionDetails.version;
    this.commitID_UI = versionDetails.commit;
  }
}
