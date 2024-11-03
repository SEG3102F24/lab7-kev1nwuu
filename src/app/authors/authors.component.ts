import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorsService } from './service/authors.service';
import { Author } from './model/author';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authorId!: number;
  author: Author | null = null;
  errorMessage = '';

  constructor(private authorsService: AuthorsService) {}

  fetchAuthorById(id: number) {
    this.authorsService.getAuthor(id.toString()).subscribe({
      next: (author: Author) => (this.author = author),
      error: () => (this.errorMessage = 'Author not found'),
    });
  }
}
