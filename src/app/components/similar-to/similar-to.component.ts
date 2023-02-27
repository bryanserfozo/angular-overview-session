import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordSimilarTo } from 'src/app/models/word-similar-to';
import { SimilarToService } from 'src/app/services/similar-to.service';

@Component({
  selector: 'app-similar-to',
  templateUrl: './similar-to.component.html',
  styleUrls: ['./similar-to.component.css']
})
export class SimilarToComponent {

  constructor(
    private similarToService: SimilarToService,
    private route: ActivatedRoute
  ){}

  word = '';

  similarToResult: String ='';

  similarTo() {
    if (this.word = '') {
      this.similarToResult = 'Please fill in the "word" field.';
      return;
    }
  
    let wordInfo: WordSimilarTo = new WordSimilarTo(
      this.word,
    );
  
    
  
      this.similarToService.fileClaim(claimInfo).subscribe({
        next: (clInfo) => {
            this.amount = 0;
            this.description = '';
            this.fileClaimResult = 'Claim submission successful';
        },
        error: (err) => {
          this.fileClaimResult = err.error;
          console.log(err);
        },
  
  
      });
  
  
  
  
  }


}
