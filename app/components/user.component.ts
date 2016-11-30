import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Address } from '../types/address.type';
import { Post } from '../types/post.type';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: '../templates/user.template.html',
    providers: [ PostsService ]
})
export class UserComponent {
    name: string;
    email: string;
    address: Address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService){
        this.name = 'John Doe';
        this.email = 'john@gmail.com';
        this.address = {
            street: '12 Main st.',
            city: 'Phoenix',
            state: 'AZ'
        }
        this.hobbies = ['Music', 'Movies', 'Sports']
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(p => {
            this.posts = p;
        });
    }
    toggleHobbies() {
        this.showHobbies = (!this.showHobbies);
    }
    addHobby(h:string) {
        this.hobbies.push(h);
    }
    deleteHobby(i:number) {
        this.hobbies.splice(i,1);
    }
}