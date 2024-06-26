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
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { ConfirmationDialogsService } from 'src/app/core/services/dialog/confirmation.service';
import { StoreMappingService } from 'src/app/core/services/inventory-services/store-mapping.service';

@Component({
  selector: 'app-update-store-mapping',
  templateUrl: './update-store-mapping.component.html',
  styleUrls: ['./update-store-mapping.component.css'],
})
export class UpdateStoreMappingComponent implements OnInit {
  @Input()
  storeDetails: any;

  @Output()
  modeChange = new EventEmitter();

  storeMappingForm!: FormGroup;
  storeList: any = [];
  mainStoreList: any = [];
  subStoreList: any = [];
  parkingPlaceList: any = [];
  vanList: any = [];
  createdBy: any;
  providerServiceMapID: any;

  previousParkingPlace: any;
  previousVan: any;

  constructor(
    private fb: FormBuilder,
    private notificationService: ConfirmationDialogsService,
    private storeMappingService: StoreMappingService,
  ) {}

  ngOnInit() {
    this.storeMappingForm = this.createStoreMappingForm();
    if (this.storeDetails) {
      console.log(this.storeDetails);
      this.createdBy = this.storeDetails.createdBy;
      this.providerServiceMapID = this.storeDetails.providerServiceMapID;
      this.getAllStore(this.providerServiceMapID);
    }
  }

  patchStoreDetails(storeDetails: any) {
    if (storeDetails.parkingPlaceID) {
      const mainStore = this.storeList.filter(
        (item: any) => item.facilityID === storeDetails.facilityID,
      );
      console.log(mainStore);
      this.storeMappingForm.patchValue({
        isMainFacility: storeDetails.isMainFacility,
        facilityID: storeDetails.facilityID,
        facilityName: mainStore[0],
      });
      this.getParkingPlace(this.providerServiceMapID, storeDetails);
    }

    if (storeDetails.vanID) {
      const mainStore = this.storeList.filter(
        (item: any) => item.facilityID === storeDetails.mainFacilityID,
      );
      const subStore = this.storeList.filter(
        (item: any) => item.facilityID === storeDetails.facilityID,
      );
      console.log(mainStore, subStore, storeDetails);

      this.storeMappingForm.patchValue({
        isMainFacility: storeDetails.isMainFacility,
        facilityID: storeDetails.mainFacilityID,
        facilityName: mainStore[0],
        subFacilityID: storeDetails.facilityID,
        subFacilityName: subStore[0],
      });
      this.getVan(storeDetails.mainFacilityID, storeDetails);
    }
  }

  storeSubs: any;
  getAllStore(providerServiceMapID: any) {
    this.storeSubs = this.storeMappingService
      .getAllStore(providerServiceMapID)
      .subscribe(
        (response: any) => {
          this.storeList = response.data.filter((item: any) => !item.deleted);
          this.patchStoreDetails(this.storeDetails.store);
        },
        (err) => {
          this.notificationService.alert(err, 'error');
        },
      );
  }

  parkingSubs: any;
  getParkingPlace(providerServiceMapID: any, storeDetails: any) {
    this.parkingSubs = this.storeMappingService
      .getAllParkingPlace(providerServiceMapID)
      .subscribe(
        (response: any) => {
          this.previousParkingPlace = storeDetails.parkingPlaceID;
          const parkingPlace = response.data.filter(
            (item: any) => item.parkingPlaceID === storeDetails.parkingPlaceID,
          );
          this.parkingPlaceList = response.data.filter(
            (item: any) =>
              !item.facilityID ||
              item.parkingPlaceID === storeDetails.parkingPlaceID,
          );
          this.storeMappingForm.patchValue({
            parkingPlaceID: parkingPlace[0].parkingPlaceID,
            parkingPlaceName: parkingPlace[0],
          });
        },
        (err) => {
          this.notificationService.alert(err, 'error');
        },
      );
  }

  vanSubs: any;
  getVan(facilityID: any, storeDetail: any) {
    this.vanSubs = this.storeMappingService.getAllVan(facilityID).subscribe(
      (response: any) => {
        this.previousVan = storeDetail.vanID;
        const van = response.data.filter(
          (item: any) => item.vanID === storeDetail.vanID,
        );
        this.vanList = response.data.filter(
          (item: any) => !item.facilityID || item.vanID === storeDetail.vanID,
        );
        this.storeMappingForm.patchValue({
          vanID: van[0].vanID,
          vanName: van[0],
        });
      },
      (err) => {
        this.notificationService.alert(err, 'error');
      },
    );
  }

  createStoreMappingForm() {
    return this.fb.group({
      isMainFacility: { value: undefined, disabled: true },
      facilityID: undefined,
      facilityName: { value: undefined, disabled: true },
      subFacilityID: undefined,
      subFacilityName: { value: undefined, disabled: true },
      parkingPlaceID: undefined,
      parkingPlaceName: undefined,
      vanID: undefined,
      vanName: undefined,
    });
  }

  updateStoreMapping() {
    const temp = JSON.parse(JSON.stringify(this.storeMappingForm.value));
    console.log(temp);
    // if (temp && temp.parkingPlaceID) {
    //   temp.facilityID = temp.facilityID;
    // }
    if (temp && temp.vanID) {
      temp.facilityID = temp.subFacilityID;
    }
    if (temp && temp.parkingPlaceName) {
      temp.parkingPlaceID = temp.parkingPlaceName.parkingPlaceID;
      temp.parkingPlaceName = temp.parkingPlaceName.parkingPlaceName;
      temp.vanID = undefined;
      temp.vanName = undefined;
    }
    if (temp && temp.vanName) {
      temp.vanID = temp.vanName.vanID;
      temp.vanName = temp.vanName.vanName;
      temp.parkingPlaceID = undefined;
      temp.parkingPlaceName = undefined;
    }

    temp.modifiedBy = this.createdBy;
    temp.subFacilityID = undefined;
    temp.subFacilityName = undefined;
    temp.isMainFacility = this.storeDetails.store.isMainFacility;

    if (this.previousParkingPlace) {
      temp.oldParkingPlaceID = this.previousParkingPlace;
      temp.oldVanID = undefined;
    }

    if (this.previousVan) {
      temp.oldVanID = this.previousVan;
      temp.oldParkingPlaceID = undefined;
    }

    console.log(JSON.stringify(temp, null, 4));

    this.storeMappingService.postStoreMapping([temp]).subscribe(
      (response) => {
        if (response) {
          this.notificationService.alert('Updated successfully', 'success');
          this.switchToViewMode();
        }
      },
      (err) => {
        this.notificationService.alert(err, 'error');
        console.log(err, 'Error');
      },
    );
  }

  switchToViewMode() {
    this.modeChange.emit('view');
  }

  get isMainFacility() {
    return this.storeMappingForm.controls['isMainFacility'].value;
  }
}
