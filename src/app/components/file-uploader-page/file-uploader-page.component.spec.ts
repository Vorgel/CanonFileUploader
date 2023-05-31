import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderPageComponent } from './file-uploader-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('FileUploaderPageComponent', () => {
  let component: FileUploaderPageComponent;
  let fixture: ComponentFixture<FileUploaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      declarations: [ FileUploaderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
