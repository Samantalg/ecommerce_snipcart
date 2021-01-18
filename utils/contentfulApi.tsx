const space = 'n7v8mvcnauae'
const accessToken = 'sCp0sqiq2oZR-bhm9kjdW5GUG-u_040Jg4DyLHVy9uM'

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
 const entries = await client.getEntries()
  if (entries.items) {
    return entries.items
  } else {
    console.log(`Error getting Entries for contentful.`)
  }
}

export default { fetchEntries }