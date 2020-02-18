import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IMovie } from "src/app/models/movies";
@Component({
    selector: "sw-view-detailsmovie",
    templateUrl: "./view-detailsmovie.component.html"
})
export class ViewDetailsmovieComponent {
    constructor(
        public dialogRef: MatDialogRef<ViewDetailsmovieComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IMovie
    ) {}
    onClose(): void {
        this.dialogRef.close();
    }
}
