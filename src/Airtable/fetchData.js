import Airtable from 'airtable'

const base = new Airtable(
  { apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }
).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function fetchData(path, callback) {
  base(path).select({
    view: 'Grid view'
  }).eachPage(records => {
    callback(records);
  });
}

export default fetchData;