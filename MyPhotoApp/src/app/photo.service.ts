import { Injectable } from '@angular/core';
import { Album } from './Album';
import { Photo } from './Photo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiBaseUrl = "http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api"

  idToken = localStorage.getItem('idToken');

  constructor(private http: HttpClient) { }

  public savePhoto(fileId, albumId){

    var fileUrl = this.apiBaseUrl + "/files/show/"+fileId;

  console.log('Id token inside Photo service', this.idToken);
  console.log('File URL inside Photo service', fileUrl);
  console.log('Album Id inside Photo service', albumId);

    var photo: Photo = {

      id: "",
      albumId: albumId,
      fileId: "",
      thumbnailUrl: fileUrl,
      PhotoUrl: fileUrl,
      dateCreated: "",
      createdBy: "",
    };

    var headers = this.getHeaders();
    return this.http.post(this.apiBaseUrl + "/photos", photo, {headers});
    //return this.http.get(this.apiBaseUrl + "/albums", {headers});

  }

  public getHeaders(){
    var headers = {
      'idToken': this.idToken
    };

  return headers;

}
}
