const Cosmic = require('cosmicjs')()

const bucket = Cosmic.bucket({
  slug: 'bussiness-site-with-vuetify-blog-production',
  read_key: 'cDYq7KfKsiIpEaWQAa3TJC6BDDoUs3INkf85kxGcaXewFfIycN',
  write_key: 'dg71qbTRZ3NppybIAxeNEW0bQ3zSswNz2iMqii9MiMJTR8z18b'
  // slug: process.env.COSMIC_BUCKET,
  // read_key: process.env.COSMIC_READ_KEY,
  // write_key: process.env.COSMIC_WRITE_KEY
})

export default bucket
