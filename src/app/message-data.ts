import { InMemoryDbService } from "angular-in-memory-web-api";
import { Email } from './_models/email.model';

export class EmailData implements InMemoryDbService {
  createDb(){
    const emails: Email[] = [
      {
          "id": 1,
          "date": "2021-07-05T18:25:43.511Z",
          "to": "rudolpharthur@gmail.com",
          "from": "no-reply@linkedin.com",
          "title": "LinkedIn",
          "content": "You have a new connection request here:\nhttps://www.linkedin.com/in/rudyah/",
          "important": true
      },
      {
          "id": 2,
          "date": "2021-03-23T18:25:43.511Z",
          "to": "rudolpharthur@gmail.com",
          "from": "re-reply@officenbc.com",
          "title": "Michael Scott Daily Jokes",
          "content": "\"I told my girlfriend she drew her eyebrows too high.\"\n\"She seemed surprised.\"",
          "important": false
      },
      {
          "id": 3,
          "date": "2021-01-23T18:25:43.511Z",
          "to": "you@yourcompany.com",
          "from": "ru@dus.io",
          "title": "Rudus Software",
          "content": "Learn how you can give us money by calling (209)322-7832.\nOur operators are standing by. Call Now!!!\nhttps://rudyah.com",
          "important": true
      },
      {
          "id": 4,
          "date": "2020-07-05T18:25:43.511Z",
          "to": "rudolpharthur@gmail.com",
          "from": "no-reply@linkedin.com",
          "title": "Angular Digest",
          "content": "Here, read this and learn more.\n https://jasonwatmore.com/post/2019/02/07/angular-7-communicating-between-components-with-observable-subject",
          "important": true
      },
      {
          "id": 5,
          "date": "2020-03-23T18:25:43.511Z",
          "to": "rudolpharthur@gmail.com",
          "from": "re-reply@officenbc.com",
          "title": "Rudy H Daily Quotes",
          "content": "\"I like code. 'Code likes me'\"\n\"Okay sometimes it doesn't\"\n\"But I still like it\"\n\"Okay sometimes it does seem awfully mean.\"\n\"But its nice when it works like a charm.\"",
          "important": false
      },
      {
          "id": 6,
          "date": "2020-01-05T18:25:43.511Z",
          "to": "rudolpharthur@gmail.com",
          "from": "no-reply@linkedin.com",
          "title": "You've got mail",
          "content": "AOL for life",
          "important": false
      },
      {
          "id": 7,
          "date": "2019-03-23T18:25:43.511Z",
          "to": "rudolpharthur@gmail.com",
          "from": "re-reply@officenbc.com",
          "title": "Blah blah",
          "content": "\"Friends. That's what friends do.\"\n\"They help each other out\"\n\"It is awfully nice.\"\n\"Be a friend.\"",
          "important": false
      },
    // ];

    // const tagged : Email [] = [];

    // const sentmail : Email[] = [
      {
        "id": 9,
        "date": "2018-03-23T18:25:43.511Z",
        "to": "support@amazon.com",
        "from": "rudolpharthur@gmail.com",
        "title": "Late return",
        "content": "Ummmm Hi, me again.\nI forgot to return yesterday\nCan I still return?\n",
        "important": false,
        "sent" : true
      },
      {
          "id": 11,
          "date": "2018-02-13T18:25:43.511Z",
          "to": "support@amazon.com",
          "from": "rudolpharthur@gmail.com",
          "title": "When is Prime day",
          "content": "I prefer prime day to any other day\nPrime day soon.\nThanks.\n",
          "important": false,
          "sent" : true
      },
    // ];

    // const drafts : Email [] = [];

    // const trash : Email[] = [
      {
        "id": 13,
        "date": "2018-02-13T18:25:43.511Z",
        "to": "spam@spambot.com",
        "from": "spammy@McSpammy.com",
        "title": "You won the lottery!",
        "content": "You won Rudy!\nClaim your winnings\nSend me money to process the claim.\n",
        "important": false,
        "trash": true
      }
    ];

    // return { inbox, tagged, sentmail, drafts, trash };
    return { emails }
  }
}
