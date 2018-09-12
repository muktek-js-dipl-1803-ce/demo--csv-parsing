const parse = require('csv-parse')
const fs = require('fs')

const csvDataString = fs.readFileSync(`${__dirname}/data/salesorders.csv`, 'utf-8')

console.log(csvDataString);

const configObj = {
  trim: true,
  ltrim: true,
  cast : true,
  columns: true,
  skip_empty_lines : true
}
parse(csvDataString, configObj, (err, data)=>{
  console.log(data);
  return data
})
