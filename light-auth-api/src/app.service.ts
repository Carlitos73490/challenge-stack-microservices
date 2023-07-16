import { Injectable } from '@nestjs/common';

const FAKE_TOKEN = "f4gf5ezg4e5s"

@Injectable()
export class AppService {
  GenerateFakeToken(email : string,password : string): string {
    if(email == 'carl@icloud.com' && password == '1234'){
      return FAKE_TOKEN
    }
    return "";
  }
  CheckFakeToken(token : string): boolean {
    return token == FAKE_TOKEN;
  }
}



