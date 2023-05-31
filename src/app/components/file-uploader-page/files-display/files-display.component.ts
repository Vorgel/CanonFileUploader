import { Component } from '@angular/core';
import { IFile } from 'src/app/models/IFile';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-files-display',
  templateUrl: './files-display.component.html',
  styleUrls: ['./files-display.component.scss']
})
export class FilesDisplayComponent {

  files:IFile[] = [];  

  constructor(private filesService: FileUploadService) {
    this.filesService.onFilesChange.subscribe(files => this.files = files);
  }
  getAllUploadedFiles(): void {
    this.filesService.getAllFiles().subscribe(filesFromDb => this.filesService.setFiles(filesFromDb))
  }

  clearList(): void {
    this.files = [];
    this.filesService.setFiles(this.files);
  }

  isClearDisabled():boolean {
    return this.files.length < 1;
  }
}
