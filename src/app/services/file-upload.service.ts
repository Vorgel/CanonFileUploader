import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IFile } from '../models/IFile';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public apiUrl:string = environment.baseUrl + ApiPaths.Files;

  public files: IFile[] = [];
  public onFilesChange:Subject<IFile[]> = new Subject();

  constructor(private http:HttpClient) { }

  setFiles(files: IFile[]): void{
    this.files = files;
    this.onFilesChange.next(files);
  }

  getAllFiles(): Observable<IFile[]> {
    return this.http.get<IFile[]>(this.apiUrl)
  }

  addFile(file:IFile): Observable<any> {
    const headers = { 'content-type': 'application/json'} 

    return this.http.post(this.apiUrl, file, {'headers':headers});
  }
}
