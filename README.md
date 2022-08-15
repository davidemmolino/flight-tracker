# MyFlight-Tracker
When traveling to multiple countries using several airlines it becomes a hassle to keep track of flight details since most airlines use their own apps.

I made an app where a user is able to input their flight details and is able to keep all that information in one location. 

This is a project that I plan on following standard agile workflow as much as I can. Once the app is back to its basic functionality I will start implementing test coverage and CI/CD. If you can help me out with this that would be great! 

## Tech stack

**Frontend**

- HTML/CSS/SCSS
- Typescript
- React/Redux

**Backend**

- Nodejs
- Express.js

**Built with**
- Webpack 5


## Screenshots

I will add them in the future when I get basic functionality back online. The convertion to Typescript hindered some of it. In the meantime here's an early wireframe screen shot of it. 

### Figma Wireframe Prototype
- https://www.figma.com/file/O3B0ahlcn2SnYKdQUQjwim/Flight-Tracker-Wireframe?node-id=0%3A1

![Flight-tracker early stage wireframe](./props/images/wireframe_early_stage.png)

## Features 

At the moment it has almost all CRUD functionality.
You can add cards through a modal.

API used in this app will be: https://aviationstack.com/

### Installation

```
npm install
npm start //alternatively npx webpack --config webpack.config.js
```

## Tests

Tests are not set up yet. However, I am planning on using Jest and React Testing Library.

## Plans for the app

- [ ] Adding a solid test suite and CI/CD.
- [ ] Database to have persistent data.
- [ ] User login screen.
- [ ] User registration.
- [ ] Authentication and security measures to handle sensitive data.
- [ ] Adding a feature to add weather reports of destination location.
- [ ] Migrating to a mobile platform.
- [ ] Automatically create flight detail card upon purchasing flight.

**Please, for any other cool ideas please feel free to shoot me an email or create an issue and will go over it!**

## Meta 

Davide Molino – https://twitter.com/TheVerdeLive – davidemmolino@gmail.com

Distributed under the GNU General Public License v3.0 license. See LICENSE for more information.

https://github.com/davidemmolino/flight-tracker


## Contribute

Thanks for taking the time to contribute!
These are just guidelines, not rules, so use your best judgement and feel free to propose changes to this document in a pull request.

1. Fork it (https://github.com/davidemmolino/flight-tracker)
2. Clone it HTTPS (`git clone https://github.com/davidemmolino/flight-tracker.git`)
3. Create your feature branch (`git checkout -b 'feature/fooBar'`)
4. Commit your changes (`git commit -am 'Added some fooBar'`)
5. Push the branch (`git push feature/fooBar`)
6. Create a new Pull Request from feature branch to main branch

If you're facing merge conflicts get in touch with me and we can solve them together. 


