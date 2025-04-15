import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewsComponent } from './project-previews.component';

describe('ProjectPreviewsComponent', () => {
  let component: ProjectPreviewsComponent;
  let fixture: ComponentFixture<ProjectPreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPreviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
