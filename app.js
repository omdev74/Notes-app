const chalk =require('chalk')
const yargs =require('yargs')
const notes =require('./notes.js')

// console.log(process.argv)

//customize yargs version(by default it is'1.0.0')
yargs.version('2.0.0')

//create add command
yargs.command(
    {
        command:'add',
        describe:'adds a new note',
        builder:
        {
            title:
            {
                describe:'Note title',
                demandOption: true,//by default false
                type:'string'
            },
            body:
            {
                describe:'content/body of the note',
                demandOption: true,
                type:'string'
            }
        },
        handler: function(argv)
                    {
                        // console.log((chalk.yellow.inverse.underline('adding a new note '+'\n'+'Title :' + argv.title+'\n'+'Body :' + argv.body)),argv)
                        notes.addNote(argv.title,argv.body)
                    }
        
    }
)
//create a remove command
yargs.command(
    {
        command:'remove',
        describe:'removes a note',
        builder:
        {
            title:{
                describe:'title of the removing note',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv)
                    {
                        notes.removeNote(argv.title)
                    }
    }
)
//create a list command
yargs.command(
    {
        command:'list',
        describe:'list all the notes',
        handler()
                    {
                        notes.listNotes()
                    }
    }
)
//create a read command
yargs.command(
    {
        command:'read',
        describe:'reads an existing note',
        builder:{
            title:{
                describe:'title of the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv)
                    {
                        notes.readNote(argv.title)
                    }
    }
)

// console.log(yargs.argv)
yargs.parse();


