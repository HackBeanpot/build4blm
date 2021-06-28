## Instructions for working on Build for Black Lives repo: 
- Master branch: production-ready site that gets deployed. Merging should only happen from development to master.
- Development branch: branch for developers to merge in their features as they are completed. PR should be made from feature branch to `dev`.
- Feature branches: Each developer should make a new branch for their work from the development branch in the following format: `cari-feature-name`. Make a pull request into develop after your work has been completed. Please note that new experimental changes to your code should not be made when a PR is open.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## External contributions
If you are interested in contributing to this website, thank you! Please see [the contributing file](./CONTRIBUTING.md) for more details.

## Shared styles
The `h1, h2, h3, h4, h5 and p` tags match the character styles from ther [XD designs](https://xd.adobe.com/view/cfe9fc7e-8850-42aa-a713-de8009844536-9aba/) and for the most part should be the only ones used without needing additional custom styling.

Use the `logotype` class for site titles that are meant to be in Archivo font.

All `Button`s should use either the `primary-button` or `secondary-button` classNames for the yellow and blue buttons respectively.

When adding CSS rules, make sure that you are adding rules to the specific corresponding file of the component you are editing (ie AboutPage.css for the About page). To ensure that there are no accidental side effects from style rules, please localize your classnames with the prefix for the component you are editing (ie all custom classes in the about page should have the `about-` prefix). This rule does not apply to any universal styling classes that are used, like `primary-button`.

## Running locally -- airtable API
In order to run this locally, you will need an Airtable API key which you can obtain from your Airtable account page. Create a file at the root directory (with the gitignore and stuff, NOT in the /src folder!) called `.env`. The contents of this file should just be the line `REACT_APP_AIRTABLE_KEY=<your api key>`. Don't put quotation marks or anything around the key value. **DO NOT** commit this file to github!! If you need help with this, message @felicia
