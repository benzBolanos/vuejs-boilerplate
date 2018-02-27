import convert from 'xml-js'

const xmlConverter = (data) => {
  const options = {
    compact: true,
    spaces: 2
  }

  return convert.xml2json(data, options)
}

export {
  xmlConverter
}
