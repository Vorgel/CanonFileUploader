import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementRef } from '@angular/core';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ FileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return false when files array is empty', () => {
    expect(component.isFileAlreadyAdded()).toBe(false);
  });

  it('should return false when selectedFile is not found in files array', () => {
    component.files = [
      { name: 'file1' },
      { name: 'file2' },
      { name: 'file3' }
    ];
    component.selectedFile = 'file4';

    expect(component.isFileAlreadyAdded()).toBe(false);
  });

  it('should return true when selectedFile is found in files array', () => {
    component.files = [
      { name: 'file1' },
      { name: 'file2' },
      { name: 'file3' }
    ];
    component.selectedFile = 'file2';

    expect(component.isFileAlreadyAdded()).toBe(true);
  });

  it('should clear the selectedFile', () => {
    component.selectedFile = 'example.jpg';
    component.clearSelectedFile();
    expect(component.selectedFile).toBe('');
  });

  it('should return true if selectedFile is not set', () => {
    component.selectedFile = '';
    const result = component.isUploadDisabled();
    expect(result).toBe(true);
  });

  it('should return false if selectedFile is set', () => {
    component.selectedFile = 'example.jpg';
    const result = component.isUploadDisabled();
    expect(result).toBe(false);
  });
});