/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMock } from '../../test/mock.helper.spec';
import { NotificationService } from '../../services/notification.service';
import { TranslateTestingModule } from '../../test/translate-testing-module';
import { UserTestingModule } from '../../test/user-testing-module';
import { GvContactComponent } from './gv-contact.component';

describe('GvContactComponent', () => {
  let component: GvContactComponent;
  let fixture: ComponentFixture<GvContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GvContactComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateTestingModule,
        HttpClientTestingModule,
        RouterTestingModule,
        UserTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      providers: [
        provideMock(NotificationService),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvContactComponent);
    component = fixture.componentInstance;
  });

  it('should create', (done) => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
      done();
    });
  });
});
