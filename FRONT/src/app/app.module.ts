import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './containers/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, ColumnComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
