import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-offcanvas',
  templateUrl: './comp-offcanvas.component.html',
  styleUrls: ['./comp-offcanvas.component.css']
})
export class CompOffcanvasComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "isActive",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "id",
    allowed: "string",
    type: "string",
    default: "1"
  }];

  selector = "mg-offcanvas";

  title = "Offcanvas";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Offcanvas");
  }

}
