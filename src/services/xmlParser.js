import convert from 'xml-js'

const xmlConverter = (data) => {
  const options = {
    compact: true,
    spaces: 2
  }

  const xmlJSONString = convert.xml2json(data, options)
  return JSON.parse(xmlJSONString).response
}

export {
  xmlConverter
}
