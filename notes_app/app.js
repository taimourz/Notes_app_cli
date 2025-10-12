import getNotes from './notes.js'
import chalk from 'chalk'
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

const command = process.argv[2]

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Adding Notes',
    builder: (yargs) => {
      return yargs
      .option('title', {
        describe: 'Note Title',
        demandOption: true,   
        type: 'string'
      })
      .option('description', {
        describe: 'Note description',
        demandOption: true,   
        type: 'string'
      })
    },
    handler: (argv) => {
      console.log(chalk.green('Adding Notes'))
      console.log('Title:', argv.title)
      console.log('Description:', argv.description)
    }
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: 'remove',
    describe: 'Removing Notes',
    handler: (argv) => {
      console.log(chalk.green('Removing Notes'))
    }
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: 'list',
    describe: 'List Notes',
    handler: (argv) => {
      console.log(chalk.green('Listing Notes'))
    }
  })
  .parse();
yargs(hideBin(process.argv))
  .command({
    command: 'read',
    describe: 'Read Notes',
    handler: (argv) => {
      console.log(chalk.green('Reading Notes'))
    }
  })
  .parse();

  