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
import { Injectable } from '@angular/core';
// import { InterceptedHttp } from '../../http.interceptor';
// import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { environment } from 'src/environments/environment';
@Injectable()
export class SpecialistMappingService {
  private providerAdmin_Base_Url: any;
  private common_Base_Url: any;

  private _saveUserSpecializationURL: any;
  private _getSpecializationURL: any;
  private _getUserTMURL: any;
  private _getUserSpecializationURL: any;
  private _activateUserSpecializationURL: any;

  constructor(
    private http: HttpClient,
    public basepaths: ConfigService,
  ) {
    this.providerAdmin_Base_Url = this.basepaths.getAdminBaseUrl();
    this.common_Base_Url = this.basepaths.getCommonBaseURL();
    this._saveUserSpecializationURL =
      this.providerAdmin_Base_Url + 'TM/saveUserSpecialization';
    this._getSpecializationURL =
      this.providerAdmin_Base_Url + 'TM/getSpecialization';
    this._getUserTMURL = this.providerAdmin_Base_Url + 'TM/getUser';
    this._getUserSpecializationURL =
      this.providerAdmin_Base_Url + 'TM/getUserSpecialization';
    this._activateUserSpecializationURL =
      this.providerAdmin_Base_Url + 'TM/activateUserSpecialization';
  }

  toggleMapping(userSpecializationMapID: any, deleted: any, modifiedBy: any) {
    return this.http.post(environment._activateUserSpecializationURL, {
      userSpecializationMapID,
      deleted,
      modifiedBy,
    });
  }

  getDoctorList(serviceproviderID: any, screenName: any): Observable<any> {
    return this.http.post(environment._getUserTMURL, {
      serviceproviderID,
      screenName,
    });
  }

  getSpecializationList() {
    return this.http.post(environment._getSpecializationURL, {});
  }

  getCurrentMappings(serviceproviderID: any) {
    return this.http.post(environment._getUserSpecializationURL, {
      serviceproviderID,
    });
  }

  saveMappings(apiObj: any) {
    return this.http.post(environment._saveUserSpecializationURL, apiObj);
  }
}