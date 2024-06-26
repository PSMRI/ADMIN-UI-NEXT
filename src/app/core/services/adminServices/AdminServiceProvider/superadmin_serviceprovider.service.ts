// /*
//  * AMRIT – Accessible Medical Records via Integrated Technology
//  * Integrated EHR (Electronic Health Records) Solution
//  *
//  * Copyright (C) "Piramal Swasthya Management and Research Institute"
//  *
//  * This file is part of AMRIT.
//  *
//  * This program is free software: you can redistribute it and/or modify
//  * it under the terms of the GNU General Public License as published by
//  * the Free Software Foundation, either version 3 of the License, or
//  * (at your option) any later version.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  * GNU General Public License for more details.
//  *
//  * You should have received a copy of the GNU General Public License
//  * along with this program.  If not, see https://www.gnu.org/licenses/.
//  */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { ConfigService } from '../../config/config.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// import { InterceptedHttp } from './../../../http.interceptor';
// import { SecurityInterceptedHttp } from './../../../http.securityinterceptor';

@Injectable()
export class SuperAdmin_ServiceProvider_Service {
  // _baseURL = "";
  // _createServiceProviderURL = this._baseURL + "user/userAuthenticate/";
  superadmin_base_url: any;
  providerAdminBaseUrl: any;
  commonbaseurl: any;

  service_provider_setup_url: any;
  getAllStatesUrl: any;
  getAllServiceLinesUrl: any;
  checkProviderNameAvailabilityUrl: any;

  /* Mapping Provider Admin */
  getAllStatesByProviderUrl: any;
  getAllServiceLinesByProviderUrl: any;
  getAllProviderAdminUrl: any;
  getAllProviderAdminMappingsUrl: any;
  providerAdminActivateUrl: any;
  providerAdminDeactivateUrl: any;
  providerAdminUpdateUrl: any;
  MappingProviderAdminUrl: any;

  getRegistrationDataUrl: any;
  getAllProviderUrl: any;
  getProviderInfoUrl: any;
  addProviderStateAndServiceLinesUrl: any;
  getAllStatus_URL: any;

  // provider admin url
  getAllProviderAdmin_url: any;
  checkUserAvailabilityUrl: any;
  getAllGendersUrl: any;
  getAllTitlesUrl: any;
  getAllQualificationsUrl: any;
  getAllMaritalStatusUrl: any;
  createProviderAdminUrl: any;
  updateProviderAdminUrl: any;
  delete_toggle_activationUrl: any;
  getAdminDetailsUrl: any;
  checkID: any;
  // updateProviderPersonalDetailsUrl: any;

  /* new APIs */
  createProviderUrl: any;
  providerUpdateUrl: any;
  providerDeleteUrl: any;

  getAllProviderMappingsUrl: any;
  mapProviderServiceStateUrl: any;
  editMappedProviderServiceStateUrl: any;
  deleteMappedProviderServiceStateUrl: any;

  getServicelinesFromProvider_url: any;
  getAllServicesByProviderUrl: any;
  getProvider_ServiceLineLevelStatus_Url: any;

  constructor(
    private _http: HttpClient,
    public configService: ConfigService,
    // private _httpInterceptor: InterceptedHttp,
  ) {
    this.superadmin_base_url = this.configService.getSuperAdminBaseUrl();
    this.providerAdminBaseUrl = this.configService.getAdminBaseUrl();
    this.commonbaseurl = this.configService.getCommonBaseURL();

    this.service_provider_setup_url =
      this.superadmin_base_url + 'providerCreationAndMapping';
    this.getAllStatesUrl = this.commonbaseurl + 'location/states/';
    this.getAllServiceLinesUrl = this.providerAdminBaseUrl + 'getServiceline';

    this.checkProviderNameAvailabilityUrl =
      this.providerAdminBaseUrl + 'checkProvider';

    this.getRegistrationDataUrl =
      this.commonbaseurl + 'beneficiary/getRegistrationData';

    this.checkProviderNameAvailabilityUrl =
      this.providerAdminBaseUrl + 'checkProvider';
    this.getRegistrationDataUrl =
      this.commonbaseurl + 'beneficiary/getRegistrationData';

    this.getAllProviderUrl = this.providerAdminBaseUrl + 'getAllProvider';
    this.getProviderInfoUrl = this.providerAdminBaseUrl + 'getProviderStatus1';
    this.addProviderStateAndServiceLinesUrl =
      this.providerAdminBaseUrl + 'addProviderStateAndServiceLines';
    this.getAllStatus_URL = this.providerAdminBaseUrl + 'getStatus';

    /*
     * Creation of provider admin URL
     */
    this.getAllProviderAdmin_url =
      this.providerAdminBaseUrl + 'completeUserDetails';
    this.checkUserAvailabilityUrl =
      this.providerAdminBaseUrl + 'm/FindEmployeeByName';
    this.createProviderAdminUrl =
      this.providerAdminBaseUrl + 'createProviderAdmin';
    this.getAllGendersUrl = this.providerAdminBaseUrl + 'm/AllGender';
    this.getAllTitlesUrl = this.providerAdminBaseUrl + 'm/AllTitle';
    this.getAllQualificationsUrl =
      this.providerAdminBaseUrl + 'm/Qualification';
    this.getAllMaritalStatusUrl =
      this.commonbaseurl + 'beneficiary/getRegistrationDataV1';
    this.updateProviderAdminUrl =
      this.providerAdminBaseUrl + 'editProviderAdmin';
    this.delete_toggle_activationUrl =
      this.providerAdminBaseUrl + 'deleteProviderAdmin';
    this.checkID = this.providerAdminBaseUrl + 'm/FindEmployeeDetails';

    // 	this.updateProviderPersonalDetailsUrl = this.providerAdminBaseUrl + "/updateProvider";

    /* Mapping Provider Admin */
    this.getAllStatesByProviderUrl =
      this.providerAdminBaseUrl + '/m/role/state';
    this.getAllServiceLinesByProviderUrl =
      this.providerAdminBaseUrl + '/m/role/service';
    this.getAllProviderAdminUrl =
      this.providerAdminBaseUrl + 'getProviderAdmin';
    this.getAllProviderAdminMappingsUrl =
      this.providerAdminBaseUrl + 'getmappingProviderAdmintoProvider';
    this.providerAdminActivateUrl =
      this.providerAdminBaseUrl + 'deletemappingProviderAdmintoProvider';
    this.providerAdminDeactivateUrl =
      this.providerAdminBaseUrl + 'deletemappingProviderAdmintoProvider';
    this.providerAdminUpdateUrl =
      this.providerAdminBaseUrl + 'editmappingProviderAdmintoProvider';
    this.MappingProviderAdminUrl =
      this.providerAdminBaseUrl + 'mappingProviderAdmintoProvider';
    this.getAllServicesByProviderUrl =
      this.superadmin_base_url + 'getServiceLinesUsingProvider';
    this.getProvider_ServiceLineLevelStatus_Url =
      this.providerAdminBaseUrl + 'getProviderStatusByProviderAndServiceId';

    /* new APIs */
    this.createProviderUrl = this.superadmin_base_url + 'createProvider';
    this.providerUpdateUrl = this.superadmin_base_url + 'providerUpdate';
    this.providerDeleteUrl = this.superadmin_base_url + 'providerdelete';

    this.getAllProviderMappingsUrl =
      this.superadmin_base_url + 'getMappedServiceLinesAndStatetoProvider';
    this.mapProviderServiceStateUrl =
      this.superadmin_base_url + 'mapServiceLinesAndStatetoProvider';
    this.editMappedProviderServiceStateUrl =
      this.superadmin_base_url + 'editMappedServiceLinesAndStatetoProvider';
    this.deleteMappedProviderServiceStateUrl =
      this.superadmin_base_url + 'deleteMappedServiceLinesAndStatetoProvider';
    this.getServicelinesFromProvider_url =
      this.superadmin_base_url + 'getServiceLinesUsingProvider';
  }

  getServicelinesFromProvider(serviceProviderID: any) {
    return this._http.post(environment.getServicelinesFromProvider_url, {
      serviceProviderID: serviceProviderID,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getCommonRegistrationData() {
    return this._http.post(environment.getRegistrationDataUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  checkProviderNameAvailability(provider_name: any) {
    return this._http.post(environment.checkProviderNameAvailabilityUrl, {
      serviceProviderName: provider_name,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getAllStates(countryID: any) {
    return this._http.get(environment.getAllStatesUrl + countryID);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getAllServiceLines() {
    return this._http.post(environment.getAllServiceLinesUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getAllStatesByProvider(serviceProviderID: any, serviceLineID: any) {
    return this._http.post(environment.getAllStatesByProviderUrl, {
      serviceProviderID: serviceProviderID,
      serviceID: serviceLineID,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getProviderStates(serviceProviderID: any) {
    return this._http.post(environment.getAllStatesByProviderUrl, {
      serviceProviderID: serviceProviderID,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getProviderServices(serviceProviderID: any) {
    return this._http.post(environment.getAllServicesByProviderUrl, {
      serviceProviderID: serviceProviderID,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getProviderStatesInService(serviceProviderID: any, serviceID: any) {
    return this._http.post(environment.getProvider_ServiceLineLevelStatus_Url, {
      serviceProviderID: serviceProviderID,
      serviceID: serviceID,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getProviderServicesInState(serviceProviderID: any, stateID: any) {
    return this._http.post(environment.getAllServiceLinesByProviderUrl, {
      serviceProviderID: serviceProviderID,
      stateID: stateID,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getAllMappedProviders() {
    return this._http.post(environment.getAllProviderAdminMappingsUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAllProviderAdmins() {
    return this._http.post(environment.getAllProviderAdminUrl, {});
    //   .map(this.extractData_Provider)
    //   .catch(this.handleError);
  }
  public activateProviderAdmin(req_obj: any) {
    return this._http.post(environment.providerAdminActivateUrl, req_obj);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  public deactivateProviderAdmin(req_obj: any) {
    return this._http.post(environment.providerAdminDeactivateUrl, req_obj);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  public updateProviderAdminDetails(req_obj: any) {
    return this._http.post(environment.providerAdminUpdateUrl, req_obj);
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }
  public createMappingProviderAdmin(request_array: any) {
    return this._http.post(environment.MappingProviderAdminUrl, request_array);
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }
  // ** End  **//
  getAllProvider() {
    return this._http.post(environment.getAllProviderUrl, {});
    //   .map(this.extractData_Provider)
    //   .catch(this.handleError);
  }
  getAllProvider_provider() {
    return this._http.post(environment.getAllProviderUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getProviderStatus(provider: any) {
    return this._http.post(environment.getProviderInfoUrl, {
      serviceProviderID: provider,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAllStatus() {
    return this._http.post(environment.getAllStatus_URL, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  //  Provider admin related functions
  getAllProviderAdmin() {
    return this._http.post(environment.getAllProviderAdmin_url, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  checkUserAvailability(admin_username: any) {
    return this._http.post(environment.checkUserAvailabilityUrl, {
      userName: admin_username,
    });
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  createProviderAdmin(reqObject: any) {
    return this._http.post(environment.createProviderAdminUrl, reqObject);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAllGenders() {
    return this._http.post(environment.getAllGendersUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAllTitles() {
    return this._http.post(environment.getAllTitlesUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAllQualifications() {
    return this._http.post(environment.getAllQualificationsUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAllMaritalStatus() {
    return this._http.post(environment.getAllMaritalStatusUrl, {});
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  updateProviderAdmin(update_obj: any) {
    console.log('update admin', update_obj);
    return this._http.post(environment.updateProviderAdminUrl, update_obj);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  delete_toggle_activation(userID: any) {
    return this._http.post(environment.delete_toggle_activationUrl, userID);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  getAdminDetails(user_obj: any) {
    return this._http.post(this.getAdminDetailsUrl, user_obj);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }
  validateAadhar(idNumber: any) {
    return this._http.post(environment.checkID, { aadhaarNo: idNumber });
    //   .map(this.extractCustomData)
    //   .catch(this.handleError);
  }
  validatePan(idNumber: any) {
    return this._http.post(environment.checkID, { pAN: idNumber });
    //   .map(this.extractCustomData)
    //   .catch(this.handleError);
  }
  // End of provider admin

  addProviderStateAndServiceLines(array: any) {
    console.log(array);
    return this._http.post(
      environment.addProviderStateAndServiceLinesUrl,
      array,
    );
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  public createServiceProvider = (serviceProviderRequestObject: any) => {
    return this._http.post(
      environment.service_provider_setup_url,
      serviceProviderRequestObject,
    );
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  };

  public createProvider(request_array: any) {
    return this._http.post(environment.createProviderUrl, request_array);
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }

  public updateProviderDetails(req_obj: any) {
    return this._http.post(environment.providerUpdateUrl, req_obj);
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }

  public deleteProvider(req_obj: any) {
    return this._http.post(environment.providerDeleteUrl, req_obj);
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  getAllProviderMappings() {
    return this._http.post(environment.getAllProviderMappingsUrl, {});
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }

  mapProviderServiceState(requestArray: any) {
    return this._http.post(
      environment.mapProviderServiceStateUrl,
      requestArray,
    );
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }

  editMappedProviderServiceState(request_object: any) {
    return this._http.post(
      environment.editMappedProviderServiceStateUrl,
      request_object,
    );
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }

  deleteMappedProviderServiceState(request_object: any) {
    return this._http.post(
      environment.deleteMappedProviderServiceStateUrl,
      request_object,
    );
    //   .map(this.extractCustomData)
    //   .catch(this.handleCustomError);
  }
}
