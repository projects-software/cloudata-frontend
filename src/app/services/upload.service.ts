import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginService } from "./login.service";

@Injectable()
export class UploadService {
  public url: string;

  public dataText: any;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.url = "http://localhost:8888/";
  }
  public upload(dirToUpload: string, formData: any) {
    const headers = new HttpHeaders({
      token: this.loginService.getToken(),
    });
    console.log(headers);

    return this.http.post(`${this.url}upload/${dirToUpload}`, formData, {
      headers,
    });
  }


  setDataText(text: string){
      this.dataText = text;
      console.log(this.dataText)
  }

  getDataText(){
      console.log(this.dataText)
      return this.dataText;
  }
}
