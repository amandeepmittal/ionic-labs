import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

import { Injectable } from '@angular/core';

// import {


@Injectable()
export class AuthProvider {
  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }


}
