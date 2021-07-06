import {Component, OnInit} from '@angular/core';
import {File} from "../shared/file";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files: File[];

  displayedColumns: string[] = [
    "uuid", "timestamp", "parentPath", "filename", "download"
  ]

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<File[]>("/camel/data").subscribe(value => this.files = value);
  }

}
