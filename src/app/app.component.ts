import { Component, OnInit } from '@angular/core';
import Drawflow from 'drawflow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedCurrency: string = 'INR';
  title = 'crypto-check';
  constructor() {
    var id: HTMLElement = document.getElementById('drawflow')!;
    const editor = new Drawflow(id);
    editor.start();
    editor.editor_mode = 'edit'; // Default
    editor.addModule('nameNewModule');
    var html = `
<div><input type="text" df-name></div>
`;
    var data = { name: '' };

    editor.addNode('github', 0, 1, 150, 300, 'github', data, html, false);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sendCurrency(event: string) {}
}
