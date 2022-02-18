<h1 align="center">
  <br>
  <a href=""><img src="/assets/cover.jpg" alt="MetaBrainz Design System"></a>
</h1>

<h4 align="center">MetaBrainz Design System</h4>
      
<p align="center">
  <a href="#about">About</a> •
  <a href="#guidelines">Guidelines</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#issues">Issues</a> •
  <a href="#support">Support</a>
</p>

---

## About

This design system is a living, breathing document that contains all of the building blocks (React components, colors, icons, layout, etc) of the MetaBrainz projects. It aims to be single source of truth for developers and designers. Still a work in progress, always will be. 

## Guidelines

- [Design Guidelines](https://github.com/metabrainz/design-system/blob/master/guidelines/design-guidelines.md)
- [Components](https://github.com/metabrainz/design-system/blob/master/guidelines/component-usage.md)
- [Contributing Guidelines](https://github.com/metabrainz/design-system/blob/master/guidelines/component-usage.md)

## Tech stack

Building components

- 📚 [Storybook](https://storybook.js.org) for UI component development and auto-generated docs
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI

Maintaining the system

- 📦 [NPM](https://www.npmjs.com/) for packaging and distribution
- 🚥 [GitHub Actions](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) Continuous integration

## Why

The MetaBrainz design system codifies existing UI components into a central, well-maintained repository. It is built to address having to paste the same components into multiple projects again and again. This simplifies building UI's with MetaBrainz's design patterns.

#### What we're doing

- Build and maintain a design system in the open
- Share UI components between multiple apps
- Welcome contributors of all levels and backgrounds

#### What we're not doing

- Rewrite all new components from scratch
- Overhaul the visual design of components
- Typescript (the consumer apps don't use it)
- Compete with more general design systems like ANT or Material.

## Install

```bash
yarn add @metabrainz/design-system
```
or
```bash
npm install --save @metabrainz/design-system
```

Everytime a GitHub release is made, a new version of the package is automatically available at [@metabrainz/design-system](https://www.npmjs.com/package/@metabrainz/design-system)

## Contributing
	  
Got **something interesting** you'd like to **ask or share**? Start a discussion at `#metabrainz` IRC channel on libera.chat.
	    
## Issues
	  
If you think you have found a bug, please report it on the [issue tracker](https://tickets.metabrainz.org/).
Also, we highly suggest you start a discussion on our [community forum](https://community.metabrainz.org/) for any design requests or discussions.
	    
## Support

Reach out to the developers at one of the following places:

- MetaBrainz Community: https://community.metabrainz.org/
- Development IRC Channel: `#metabrainz`
- E-Mail: **support@metabrainz.org**

