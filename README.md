<br/>

<p align="center">
<img src="public/header.png" />
</p>

<br/>

<p align="center" style="padding-bottom:3rem">
<img alt="Build Status" src="https://img.shields.io/github/workflow/status/itsrennyman/react-plock/Build%20CI?style=for-the-badge" />
<img alt="Release" src="https://img.shields.io/github/v/release/itsrennyman/react-plock?style=for-the-badge" />
<img alt="Stars" src="https://img.shields.io/github/stars/itsrennyman/react-plock?style=for-the-badge" />
<img alt="License" src="https://img.shields.io/github/license/itsrennyman/react-plock?style=for-the-badge" />
</p>

<br/>

# About Plock 🌈

Plock is a responsive masonry layout implementation for React. Very simple to use and easy to understand.

## Can I see a demo? 👀

The demo is available for you [here](https://react-plock.netlify.app/)!

### Getting Started 🤩

Install the package with [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/):

```bash
$ yarn add react-plock
$ npm install react-plock
```

The most simple way to use Plock is to import it in your React app:

```jsx
import { Plock } from 'react-plock';

<Plock>
  <SuperComponent>I'm a super component! 😎</SuperComponent>
  <SuperComponent>I'm a super component too! 🤓</SuperComponent>
  <SuperComponent>Don't forget me! 😏</SuperComponent>
</Plock>
```

And that's it! 🎉 🎉 🎉 By default, Plock will use the `grid` layout with three columns. You can also override this prop by setting the `nColumns` prop:

```jsx
<Plock nColumns={2}>
  <div style={{ height: 100, width: "100%", background: "yellow" }}>1</div>
  <div style={{ height: 200, width: "100%", background: "blue" }}>2</div>
  <div style={{ height: 150, width: "100%", background: "red" }}>3</div>
  <div style={{ height: 500, width: "100%", background: "orange" }}>4</div>
</Plock>
```

Also the gap between columns can be set by setting the `gap` prop:

```jsx
<Plock nColumns={3} gap={10}>
  <div style={{ height: 100, width: "100%", background: "yellow" }}>1</div>
  <div style={{ height: 200, width: "100%", background: "blue" }}>2</div>
  <div style={{ height: 150, width: "100%", background: "red" }}>3</div>
  <div style={{ height: 500, width: "100%", background: "orange" }}>4</div>
</Plock>
```

Needs also some extra styling? No problem, you can extend the default styles by setting the `style` or the `className` prop:

```jsx
<Plock style={{ background: "red" }} className="an-happy-class">
  <div style={{ height: 100, width: "100%", background: "yellow" }}>1</div>
  <div style={{ height: 200, width: "100%", background: "blue" }}>2</div>
  <div style={{ height: 150, width: "100%", background: "red" }}>3</div>
  <div style={{ height: 500, width: "100%", background: "orange" }}>4</div>
</Plock>
```

### Built With 🏗️

- [ReactJS](https://reactjs.org/) - React

### Versioning 🚦

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/itsrennyman/react-plock/tags).

### Authors 🙋

- **Renato Pozzi** - _Initial work_ - [itsrennyman](https://github.com/itsrennyman)

### Stargazers 🌟

[![Stargazers repo roster for @itsrennyman/react-plock](https://reporoster.com/stars/itsrennyman/react-plock)](https://github.com/itsrennyman/react-plock/stargazers)

See also the list of [contributors](https://github.com/itsrennyman/react-plock/contributors) who participated in this project.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
