import { Component, ElementRef, ViewChild } from '@angular/core';
import { IFile } from 'src/app/models/IFile';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  files: IFile[] = [];
  public selectedFile: string = "";
  
  constructor(private filesService: FileUploadService) {
    this.filesService.onFilesChange.subscribe(files => this.files = files);
  }

  handleFileSelect() {
    const file = this.fileInput.nativeElement.files[0];

    if (file) {
      this.selectedFile = file.name;
    }

    this.fileInput.nativeElement.value = null;
  }
  
  uploadSelectedFile() {
    if (!this.selectedFile || this.isFileAlreadyAdded()) {
      return;
    }

    const newFile: IFile = { 
      name: this.selectedFile
    }

    this.filesService.addFile(newFile).subscribe(
      () => {
        this.files.push(newFile);
        this.filesService.setFiles(this.files)
      }      
    );
  }

  clearSelectedFile() {
    this.selectedFile = "";
  }

  isUploadDisabled(){
    return !this.selectedFile; 
  }

  isFileAlreadyAdded(): boolean{
    if (!this.files){
     return false;
   }
   
   return this.files.some(file => file.name === this.selectedFile);
 }
}
