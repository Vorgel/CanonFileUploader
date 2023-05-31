import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FileUploaderPageComponent } from './components/file-uploader-page/file-uploader-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './components/file-uploader-page/file-upload/file-upload.component';
import { FilesDisplayComponent } from './components/file-uploader-page/files-display/files-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderPageComponent,
    FilesDisplayComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
