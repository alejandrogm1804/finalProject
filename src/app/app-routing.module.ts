import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
  
  // Create an Observable out of a promise
  const data = from(fetch('https://api.themoviedb.org/3/search/movie?api_key=6a570062875301c0878af844287a4e9f&query=godfather'));
  // Subscribe to begin listening for async result
  data.subscribe({
   next(response) { console.log(response); },
   error(err) { console.error('Error: ' + err); },
   complete() { console.log('Completed'); }
  });



}
