import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-table',
  templateUrl: './comp-table.component.html',
  styleUrls: ['./comp-table.component.css']
})
export class CompTableComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "mgData",
    allowed: "[{any}]",
    type: "array of objects",
    default: "[ ]"
  }, {
    name: "ignoredColumns",
    allowed: "[object properties]",
    type: "array of strings",
    default: "[ ]"
  }, {
    name: "sortBy",
    allowed: "object property",
    type: "string",
    default: ""
  }, {
    name: "sortDirection",
    allowed: "ASC | DESC",
    type: "boolean",
    default: "ASC"
  }, {
    name: "tableTitle",
    allowed: "string",
    type: "string",
    default: "Table"
  }, {
    name: "columnsOrder",
    allowed: "[`object property`]",
    type: "array of strings",
    default: "[ ]"
  }, {
    name: "showOptions",
    allowed: "{ title: boolean, filter: boolean, sort: boolean, count: boolean }",
    type: "object",
    default: "{ false, false, false, false}"
  }, {
    name: "fixedHeader",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "dragableSort",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "paginate",
    allowed: "{status: boolean, perPage: number}",
    type: "objrct",
    default: "{status: false, perPage: 5}"
  }];
  selector = "mg-table";

  title = "Table";
  code = `<mg-table [mgData]="optionsApplied.data" [dragableSort]="optionsApplied.dragableSort" 
  [fixedHeader] = "optionsApplied.fixedHeader" [theme]="optionsApplied.theme" 
  [columnsOrder]="optionsApplied.columnsOrder"
  [paginate]="optionsApplied.paginate"
  ></mg-table>`;

  explaination = `The array used for mgData should be an array of objects and there should not be any nested objects. Should have flat Heirarchy.`;

  optionsApplied = {
    data: [{
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }, {
      username: "joe",
      usertype: "user",
      email: "joe@xyz.z"
    }, {
      username: "susan",
      usertype: "user",
      email: "susan@xyz.z"
    }, {
      username: "clark",
      usertype: "admin",
      email: "clark@xyz.z",
      phone: "0000-9089788"
    }, {
      username: "clarance",
      usertype: "moderator",
      email: "clarance@xyz.z"
    }, {
      username: "adam",
      usertype: "user",
      role: "lead",
      email: "adam@xyz.z"
    }, {
      username: "sofie",
      usertype: "user",
      email: "sofie@xyz.z"
    }, {
      username: "anderson",
      usertype: "admin",
      email: "anderson@xyz.z"
    }, {
      username: "sonia",
      usertype: "admin",
      email: "sonia@xyz.z",
      phone: "0200-1111788"
    }, {
      username: "Law",
      usertype: "moderator",
      email: "law@xyz.z"
    }, {
      username: "jennifer",
      usertype: "tech",
      role: "lead",
      email: "jennifer@xyz.z"
    }],
    columnsOrder: ["username", "email", "phone", "usertype", "role"],
    theme: "dark",
    dragableSort: true,
    fixedHeader: true,
    paginate: {
      status: true,
      perPage: 3
    }
  }

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Table");
  }

}
