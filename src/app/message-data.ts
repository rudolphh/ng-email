import { InMemoryDbService } from "angular-in-memory-web-api";
import { Email } from './_models/email.model';

export class EmailData implements InMemoryDbService {
  createDb(){
    const inbox: Email[] = [
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
          "to": "taylor@lamarsoftware.io",
          "from": "re-reply@officenbc.com",
          "title": "Michael Scott Daily Quotes",
          "content": "\"Friends joke with one another. 'Hey you're poor.' 'Hey, your momma's dead.' That's what friends do.\"\n\"It's a good thing Russia doesn't exist anymore.\"\n\"You cheated on me? When I specifically asked you not to?\"\n\"It just seems awfully mean. But sometimes, the ends justify the mean.\"\n\"Reverse psychology is an awesome tool. I don't know if you guys know about it, but, basically, you make someone think the opposite of what you believe, and that tricks them into doing something stupid. Works like a charm.\"",
          "important": false
      },
      {
          "id": 3,
          "date": "2021-01-23T18:25:43.511Z",
          "to": "you@yourcompany.com",
          "from": "taylor@lamarsoftware.io",
          "title": "LaMar Software",
          "content": "Learn how you can give us money by calling (209)322-7832.\nOur operators are standing by. Call Now!!!\nhttps://lamarsoftware.io",
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
          "to": "taylor@lamarsoftware.io",
          "from": "re-reply@officenbc.com",
          "title": "Rudy H Daily Quotes",
          "content": "\"I like code. 'Code likes me' 'Hey, your momma's code.' That's what friends do.\"\n\"It's a good thing Rome doesn't exist anymore.\"\n\"You cheated on me? When I specifically asked you not to?\"\n\"It just seems awfully mean. But sometimes, the ends justify the mean.\"\n\"Reverse psychology is an awesome tool. I don't know if you guys know about it, but, basically, you make someone think the opposite of what you believe, and that tricks them into doing something stupid. Works like a charm.\"",
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
          "to": "taylor@lamarsoftware.io",
          "from": "re-reply@officenbc.com",
          "title": "Blah blah",
          "content": "\"Friends. 'Hey you're poor.' 'Hey, your momma.' That's what friends do.\"\n\"You sheeted on me? When I specifically asked you not to?\"\n\"It just seems awfully nice.\"\n\"Reverse psychology is awesome. I don't know if you guys know about it, something stupid. Works like a charm.\"",
          "important": false
      }
    ];

    const tagged : Email [] = [];

    const sentmail : Email[] = [
      {
        "id": 9,
        "date": "2018-03-23T18:25:43.511Z",
        "to": "support@amazon.com",
        "from": "rudolpharthur@gmail.com",
        "title": "Give me my money back",
        "content": "Product sucked.\nCan I haz my money back?\nThank you have a nice day\n",
        "important": false
      },
      {
          "id": 11,
          "date": "2018-02-13T18:25:43.511Z",
          "to": "support@amazon.com",
          "from": "rudolpharthur@gmail.com",
          "title": "PLEASE give me my money back",
          "content": "Another product sucked.\nCan I haz my money back?\nThank you have a nice day\n",
          "important": false
      }
    ];

    const drafts : Email [] = [];

    const trash : Email[] = [
      {
        "id": 13,
        "date": "2018-02-13T18:25:43.511Z",
        "to": "spam@spambot.com",
        "from": "spammy@McSpammy.com",
        "title": "You won the lottery!",
        "content": "You won Rudy!\nClaim your winnings\nSend me money to process the claim.\n",
        "important": false
      }
    ];

    return { inbox, tagged, sentmail, drafts, trash };
  }
}
// happy one-year anniversary from santa barbara
// thank you Lord
// we're home
