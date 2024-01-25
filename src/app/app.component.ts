import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import FS from "@isomorphic-git/lightning-fs";
import { clone } from "isomorphic-git";
import http from "isomorphic-git/http/web";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "test";

  ngOnInit() {
    const fs = new FS("extensions");
    const dir = "/example";
    const loadExtension = async () => {
      await clone({
        fs,
        http,
        dir,
        corsProxy: "https://cors.isomorphic-git.org",
        // url: "https://github.com/artawower/orgnote-atom-one-dark.git",
        url: "https://github.com/artawower/orgnote-atom-one-dark",
        singleBranch: true,
        depth: 1,
      });
    };

    loadExtension();
  }
}
