export interface ITask  {
  "_id": string,
  "title": string,
  "details": string,
  "isDone": string,
  "color": string,
  "user_id": string,
  "time": string,
  "overdue": boolean,
  "from": string,
  "assignTo": string
}
export class taskPost {
  "_id": string;
  "title": string;
  "details": string;
  "isDone": string;
  "color": string;
  "user_id": string;
  "time": string;
  "overdue": boolean;
  "from": string;
  "assignTo": string;
}
export interface IlogUser {
  "email": string,
  "name": string;
  "password": string
}
export interface IregUser {
  "email": string,
  "name": string,
  "password": string
}


export class regUser {
  "email": string;
  "name": string;
  "password": string;
}
export class logUser {
  "email": string;
  "password": string;
}



/* export interface ITask  {
  "workspace": string,
  "name": string,
  "discription": string,
  "time": string,
  "overdue": boolean,
  "assignto": string,
  "checklist": string,
  "attachments": string,
  "done": boolean
}
export class taskPost {
  "workspace": string;
  "name": string;
  "discription": string;
  "time": string;
  "overdue": boolean;
  "assignto": string;
  "checklist": string;
  "attachments": string;
  "done": boolean;
}*/
export interface IUser {
  "email": string,
  "name": string,
  "password": string,
}

export class UserPost {
  "login": string;
  "password": string;
}

