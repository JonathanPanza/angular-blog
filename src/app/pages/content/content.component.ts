import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  contentTitle: string=""

  photoCover: string=""

  contentDescription: string=""

  private Id: string | null="0"


  constructor(
    private route:ActivatedRoute
  ){}

    ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        this.Id = value.get("Id")
      )

      this.setValuesToComponents(this.Id)
      
    }

    setValuesToComponents(Id:string | null){
      const result = dataFake.filter(article => article.id == Id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
    }
      

}
