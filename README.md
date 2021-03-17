
# Olamina Faction Website

## Tech Stack
1. React - our frontend uses React
2. Airtable - our "backend" (really there is no backend we are simply using the airtable api to read data from an airtable spreadsheet)
3. Netlify - our server (synced with github main branch)

## Credentials you need to gather 
1. You need the airtable API key (env variable name is REACT_APP_AIRTABLE_API_KEY). This lives in our WEBSITE folder in the shared google drive.
2. You need edit access to the airtable to update the website content.
3. You need netlify credentials to access the server settings.
4. You need access to this github to make changes to the website code. 

## Quick notes on the netlify site
The netlify site currently lives here: https://olamina.netlify.app/. The plan we are on for netlify is free. I think this should be fine for our needs. This means we won't need server space from The New School. We just need to have our domain pointed to netlify.

## Quick notes on the main branch
Also note that we use `main` for the primary branch as opposed to `master`. 
Github officially made the switch from `master` to `main` last year. The use of the terms "master" and "slave" in computing is harmful and points to underlying issues of racism and inequality in computer science. Language matters and this change is small but so important. 

## Basic commands to get up and running 

### `npm build`

Builds the app.\
You need to run this the first time you run the code and anytime an npm package is added.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Folder structure 

Most changes will happen within the `src` folder. That is where all of our components live. I think the favicon would be in the `public` folder, but other than this we shouldn't really be touching that folder too much.

`App.js` inside of the src folder is where our routing happens. It is also where we read data from airtable within the componentDidMountFunction. Be basically create a fetch for each "tab" of the airtable spreadsheet and store the retrieved data inside the state to be passed through to different components. 

`App.css` is where global styles live.

The `components` folder is where most changes will occur. Each subfolder represents a component that's used as a page layout or in some cases a modular component shared across pages such as the navigation. Within each subfolder is an `index.js` file with the component code and a `style.css` file with the css styles pertaining to that component.

Within the `components` folder there is also a top level `index.js` that exports all the components so that they can be imported in `App.js`

If you need to create a new component, the file workflow goes something like this: 
1. create the subfolder within the components folder.
2. inside the subfolder, create your index.js and style.css
3. make sure you are exporting your component inside `src/components/index.js`

## Airtable/Database structure 
coming soon