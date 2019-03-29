import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { noteService } from 'src/app/service/noteservices/noteService';
import { ViewChangeServiceService } from 'src/app/service/view-change-service.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  profileForm: FormGroup;

  error: string;

  fileUpload = {status: '', message: '', filePath: ''};

  imageChangedEvent: any = '';

  croppedImage: any = '';

  pic_data: { 'profile1': any; };

  constructor( private fb: FormBuilder,private service: noteService, private data : ViewChangeServiceService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      profile: ['']
    });
    
  }
  onSelectedFile(event) {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.file;
  }

  onSubmit(croppedImage) {
     console.log(croppedImage);
   
    this.service.imageupload(croppedImage).subscribe(
      data =>{
        console.log((data as any));
        const imgUrl = (data as any).data.imgUrl;
        console.log("img url: ",imgUrl);
        
        this.data.searchImg(imgUrl);
      },
      err =>{
         console.log(err);      
      })
  }


  }
  