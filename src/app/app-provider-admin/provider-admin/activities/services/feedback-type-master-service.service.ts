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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { environment } from 'src/environments/environment';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import { InterceptedHttp } from '../../http.interceptor';
// import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

@Injectable()
export class FeedbackTypeService {
  providerAdmin_Base_Url: any;
  getStates_url: any;
  getServiceLines_url: any;
  getFeedbackTypes_url: any;
  deleteFeedback_url: any;
  editFeedback_url: any;
  saveFeedback_url: any;
  getFeedbackNaturesTypes_url: any;
  deleteFeedbackNatureType_url: any;
  saveFeedbackNatureType_url: any;
  editFeedbackNatureType_url: any;

  constructor(
    private http: HttpClient,
    public basepaths: ConfigService,
  ) {
    this.providerAdmin_Base_Url = this.basepaths.getAdminBaseUrl();

    this.getStates_url = this.providerAdmin_Base_Url + 'm/role/stateNew';
    this.getServiceLines_url =
      this.providerAdmin_Base_Url + 'm/role/serviceNew';
    this.getFeedbackTypes_url =
      this.providerAdmin_Base_Url + 'm/getFeedbackType';
    this.deleteFeedback_url =
      this.providerAdmin_Base_Url + 'm/deleteFeedbackType';
    this.saveFeedback_url = this.providerAdmin_Base_Url + 'm/saveFeedbackType';
    this.editFeedback_url = this.providerAdmin_Base_Url + 'm/editFeedbackType';
    this.getFeedbackNaturesTypes_url =
      this.providerAdmin_Base_Url + 'm/getFeedbackNatureType';
    this.deleteFeedbackNatureType_url =
      this.providerAdmin_Base_Url + 'm/deleteFeedbackNatureType';
    this.saveFeedbackNatureType_url =
      this.providerAdmin_Base_Url + 'm/createFeedbackNatureType';
    this.editFeedbackNatureType_url =
      this.providerAdmin_Base_Url + 'm/editFeedbackNatureType';
  }

  getStates(userID: any, serviceID: any, isNational: any) {
    return this.http.post(environment.getStates_new_url, {
      userID: userID,
      serviceID: serviceID,
      isNational: isNational,
    });
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  getServiceLines(userID: any) {
    return this.http.post(environment.get_Service_Url, { userID: userID });
    // .map(this.handleState_n_ServiceSuccess)
    // .catch(this.handleError);
  }

  getFeedbackTypes(data: any) {
    // console.log(data,'reqObj');
    return this.http.post(environment.getFeedbackTypes_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }
  getFeedbackTypes_nature(data: any) {
    // console.log(data,'reqObj');
    return this.http.post(environment.getFeedbackTypes_url, data);
    // .map(this.handleState_n_feedbacktypes)
    // .catch(this.handleError);
  }

  saveFeedback(data: any) {
    return this.http.post(environment.saveFeedback_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  deleteFeedback(data: any) {
    return this.http.post(environment.deleteFeedback_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  editFeedback(data: any) {
    return this.http.post(environment.editFeedback_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  getFeedbackNatureTypes(data: any) {
    return this.http.post(environment.getFeedbackNaturesTypes_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  deleteFeedbackNatureType(data: any) {
    return this.http.post(environment.deleteFeedbackNatureType_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  saveFeedbackNatureType(data: any) {
    return this.http.post(environment.saveFeedbackNatureType_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  editFeedbackNatureType(data: any) {
    return this.http.post(environment.editFeedbackNatureType_url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }
}
