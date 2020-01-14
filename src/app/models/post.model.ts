export class Post {

  userId: number;
  id: number;
  title: string;
  body: string;


  // tslint:disable-next-line:ban-types
  constructor(values: Object= {}) {
    Object.assign(this, values);
  }
}
