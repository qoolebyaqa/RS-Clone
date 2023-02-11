export interface ITask  {
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
}
export interface IUser {
  "login": string,
  "password": string
}

export class UserPost {
  "login": string;
  "password": string;
}

export class EventData {
  name: string;
  constructor(name: string) {
      this.name = name;
  }
}

