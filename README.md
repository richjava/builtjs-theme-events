# Built.JS Theme: Events Tailwind

A [Built.JS](https://builtjs.com) theme for event websites, with basic Tailwind styling.

NOTE: Still in development! :)

## Demo
The demo for the site can be found here: ---Still to come---

## Installation
```
npm install
```
Then you can run the app using:
```
npm run dev
```

### Pages
- Home
- Events
- Subscribe
- Donate
- About
- Volunteer
- Contact

---

### Content Types
#### Event
Attributes:
- title: Text
- description: RichText
- featuredImage": File,
- date: Date,
- startTime: Text
- venue: Text
- townCity: Text
- duration: Text
- genre: Text
- restrictions: Text
- infoWebsite: Text
- quote: Text
- quoteSource: Text
- bookingInfo: RichText
- ticketUrl: Text
- status: Text

#### Sponsor
Attributes:
- name: Text
- image: File
- url: Text

#### Primary Menu Item
Attributes:
- label: Text
- url: Text

#### Secondary Menu Item
Attributes:
- label: Text
- url: Text

---

### Templates
Templates specify the UI design of a section. In this theme, they fall under the following categories:
##### Articles
An article displays the content of a single entry, such as a blog entry.
##### Banners
A banner is an attention section
##### Covers
A cover is a full height attention section
##### Lists
A list displays a collection of items
##### Forms
A form is a collection of inputs
##### Footers
A footer is a section at the bottom of a page
##### Headers
A header is a section at the top of a page that includes the main menu
##### Head
Head components are included in the head section of a page. For example: SEO, Analytics