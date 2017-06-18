# Quotes App

keypoints:
- setting a different root page instead of `HomePage`
- create required pages: Settings, Library, Favorites, Quotes, Quote
- Single Page Stack vs Multiple Pages Stack
  * Tabs and Sidemenu follow Multiple Pages Stack

![diff-pages-stack](http://i.imgur.com/t3EyJMY.png)

- implement Tabs navigation in a blank template
  * `selectedIndex` attribute on `ion-tabs` can alter the default behaviour of displaying a tab in app start
- add quotes data as `quoteCollection` in `LibraryPage`
  * using `ion-list`
- Page Lifecycle Events
  * methods execute when a page is loaded either through push or pop
- Theming > Utility Attributes
- Overriding Sass Variables
- `ion-tabs`
  * `selectedIndex = '1` attribute on the tag
- `ion-icon` alignmnet
- `ion-grid`
  * uses CSS Flexbox
- card
- alert
- providers
- MenuController
- Modal
- ViewControler
  * controls currently active page
  * ViewController hooks
