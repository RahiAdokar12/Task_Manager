import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import * as $ from 'jquery';
// import Container from 'quill/blots/container';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  visibleSidebar3: any;
  toggleNote: boolean = false;
  toggleMenuIcon: boolean = true;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
  

  constructor() {}

  ngOnInit(): void {
    $(document).mouseup((e: any) => {
      var container = $('.dd-menu');
      container.hide();
      $('.showMenuList').click(() => {
        container.toggle();
      });
    });
  }

  toggelNoteSection() {
    this.toggleNote = !this.toggleNote;
  }
  showAddNotes() {
    this.toggleNote = !this.toggleNote;
  }
  hideMenu() {
    this.toggleMenuIcon = !this.toggleMenuIcon;
  }
}
