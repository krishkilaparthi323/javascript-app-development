----
id:doc1
title:npm create and publish
sidebar_label:npm create and publish
---
###what is NPM 

NPM is a package manager for NodeJS. As this is an open source project to help javascript developers easily share code inform of packages.Since then thousands of packages were published and hosted.
This article will walk you through how you can create and publish your own NPM package.

###Building the package:
NPM package is the NPM command line tool which also goes by the name npm.npm is distributed with NodeJS, this means when NodeJS is installed we get automatically npm installed on computer. To verify that npm was installed properly,you can run npm --version, it will show version.

###Creating our package:
After downloading npm, we can go a head and start creating our package.
create using command line interface(CLI) as follows

#Create the project directory
mkdir random-number-generator
#Change into the project directory
cd random-number-generator
#Initialise an NPM package
npm init

A package.json file will be created in the roolt of the project folder.
package.json is the single and most important file as far as creating/publishing an NPM package is concerned, without this file,we will not be able to pubslish whatever created to the NPM registry. 
Note the main field in the package.json file, it refers to the name of the file that would be loaded when the package is required by another applicaiton by default it points to index.js