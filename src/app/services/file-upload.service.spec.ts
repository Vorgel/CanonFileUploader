import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
import { FileUploadService } from './file-upload.service';
import { IFile } from '../models/IFile';

describe('FileUploadService', () => {
  let service: FileUploadService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(FileUploadService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set files and emit changes', () => {
    const mockFiles: IFile[] = [{ name: 'file1.txt' }, { name: 'file2.jpg' }];

    service.setFiles(mockFiles);

    expect(service.files).toEqual(mockFiles);
    service.onFilesChange.subscribe((files) => {
      expect(files).toEqual(mockFiles);
    });
  });

  it('should get all files from API', () => {
    const mockFiles: IFile[] = [{ name: 'file1.txt' }, { name: 'file2.jpg' }];

    service.getAllFiles().subscribe((files) => {
      expect(files).toEqual(mockFiles);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockFiles);
  });

  it('should add file to API', () => {
    const mockFile: IFile = { name: 'file1.txt' };

    service.addFile(mockFile).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockFile);
    req.flush({ success: true });
  });
});
