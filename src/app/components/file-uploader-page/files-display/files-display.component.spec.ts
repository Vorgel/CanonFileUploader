import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadService } from '../../../services/file-upload.service';
import { FilesDisplayComponent } from './files-display.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { IFile } from 'src/app/models/IFile';

describe('FilesDisplayComponent', () => {
  let component: FilesDisplayComponent;
  let fixture: ComponentFixture<FilesDisplayComponent>;
  let filesService: FileUploadService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ FilesDisplayComponent ]
    })
    .compileComponents();

    filesService = TestBed.inject(FileUploadService);
    fixture = TestBed.createComponent(FilesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should clear the files list and update files', () => {
    component.files = [{name: 'file1.txt'}, {name:'file2.jpg'}];

    component.clearList();

    expect(component.files).toEqual([]);
    expect(filesService.files).toEqual([]);
  });

  it('should return true if files list is empty', () => {
    component.files = [];

    const result = component.isClearDisabled();

    expect(result).toBeTrue();
  });

  it('should return false if files list is not empty', () => {
    component.files = [{name: 'file1.txt'}, {name:'file2.jpg'}];

    const result = component.isClearDisabled();

    expect(result).toBeFalse();
  });
});
