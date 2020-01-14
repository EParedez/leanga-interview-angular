export class Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;

  // tslint:disable-next-line:ban-types
  constructor(values: Object= {}) {
    Object.assign(this, values);
  }
}
