#!/usr/bin/env node

const readline = require('readline')
const parseCommand = require('./lib/parseCommand.js')
const request = require('request')
const fs = require('fs')

var args = process.argv.splice(2)
if( args.length > 0 ) {
    parseCommand(args, false)
    return
}

var input = readline.createInterface({input: process.stdin, output: process.stdout})
input.on('line', (line) => {
    let args = line.split(' ')

    if( args[0] === 'exit') return input.close()

    parseCommand(args, true, () => {
        input.prompt()
    })
})
input.prompt()
