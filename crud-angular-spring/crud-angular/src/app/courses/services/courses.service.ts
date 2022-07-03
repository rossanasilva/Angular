import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpCLient: HttpClient) { }

  list() {
    return this.httpCLient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(courses => console.log(courses))
    );
   // observable que retorna um array de cursos
  }

  save(record: Course){
    return  this.httpCLient.post<Course>(this.API, record).pipe(first());
  }

}
