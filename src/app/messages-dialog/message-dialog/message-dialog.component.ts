import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-dialog',
  imports:[MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, CommonModule, ReactiveFormsModule],
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent implements OnInit {
  messageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MessageDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      this.dialogRef.close(this.messageForm.value);
    }
  }
}